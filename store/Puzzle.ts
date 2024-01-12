import { atom, selector } from "recoil";

type CellData = {
  x: number;
  y: number;
  value: number;
  notes: number;
};

const cellDatasState = atom({
  key: 'cellDatasState',
  default: [] as CellData[],
});

const selectedCoordinateState = atom({
  key: 'selectedCoordinateState',
  default: {
    x: 0,
    y: 0,
  },
});

const selectedCellDataGetter = selector({
  key: 'selectCell',
  get: ({get}) => {
    const {x, y} = get(selectedCoordinateState);
    const index = x + 9*y;
    const cellDatas = get(cellDatasState);
    let cellData: CellData;
    if (cellDatas.length > index) {
      cellData = cellDatas[index];
    }
    else {
      cellData = {
        x,
        y,
        value: 0,
        notes: 0,
      } as CellData;
    }
    return cellData;
  },
});
