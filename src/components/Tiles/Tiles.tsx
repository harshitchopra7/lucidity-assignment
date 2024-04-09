import React, { useCallback, useEffect, useState } from "react";

// styles
import "./Tiles.css";

// types
import { Item } from "../../types/types";

// deps
import { useSelector } from "react-redux";

// store
import { RootState } from "../../store/store";

const TILES_CONFIG = [
  {
    id: 1,
    icon: "https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png",
    title: "Total Product",
    description: "",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/ios/50/FFFFFF/us-dollar-circled--v2.png",
    title: "Total Store Value",
    description: "",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/external-victoruler-outline-victoruler/64/FFFFFF/external-out-of-stock-logistics-victoruler-outline-victoruler.png",
    title: "Out of Stocks",
    description: "",
  },
  {
    id: 4,
    icon: "https://img.icons8.com/windows/32/FFFFFF/diversity.png",
    title: "No of Category",
    description: "",
  },
];

function Tiles() {
  const products = useSelector((state: RootState) => state.items.items);

  const [tilesConfig, setTilesConfig] = useState(TILES_CONFIG);

  const getTotalValue = (items: Item[]): string => {
    let total = 0;
    for (const item of items) {
      total += parseFloat(item.value.replace("$", ""));
    }
    return String(total);
  };

  const updateTileDescriptions = (
    totalProducts: string,
    totalStoreValue: string,
    outofStocks: string,
    numberOfCategories: string
  ): void => {
    setTilesConfig((prevState) =>
      prevState.map((tile) => {
        switch (tile.id) {
          case 1:
            return { ...tile, description: totalProducts };
          case 2:
            return { ...tile, description: totalStoreValue };
          case 3:
            return { ...tile, description: outofStocks };
          case 4:
            return { ...tile, description: numberOfCategories };
          default:
            return tile;
        }
      })
    );
  };

  const updateTiles = useCallback((data: Item[]) => {
    const totalProducts = String(data?.length) ?? "0";
    const totalStoreValue = getTotalValue(data);

    const itemsWithZeroQuantity = data.filter((item) => item?.quantity === 0);
    const outofStocks = String(itemsWithZeroQuantity?.length) ?? "0";

    const differentCategories = Array.from(
      new Set(data?.map((item) => item?.category?.toLowerCase()))
    );
    const numberOfCategories = String(differentCategories?.length) ?? "0";

    updateTileDescriptions(
      totalProducts,
      totalStoreValue,
      outofStocks,
      numberOfCategories
    );
  }, []);

  useEffect(() => {
    updateTiles(products);
  }, [products, updateTiles]);

  return (
    <div className="all-tiles-container">
      {tilesConfig.map((item, key) => (
        <div className="tiles-container" key={key}>
          <div className="tiles-left-container">
            <img src={item.icon} alt="icon" />
          </div>
          <div className="tiles-right-container">
            <p className="tiles-right-container-title">{item.title}</p>
            <p className="tiles-right-container-description">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tiles;
