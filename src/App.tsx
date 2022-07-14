import React from 'react';
import './App.css';
import {RangeDirective, RangesDirective, SheetDirective, SheetsDirective, 
  SpreadsheetComponent, ColumnsDirective, ColumnDirective, RowsDirective, RowDirective, CellsDirective, CellDirective} from '@syncfusion/ej2-react-spreadsheet';
import {freezePaneData} from './data';
function App() {
  let ssObj: SpreadsheetComponent | null;
  const onCreated=()=>{
    ssObj?.wrap("A1:P1", true);
    ssObj?.freezePanes(1,2);
  }
  return (
    <div className="App">
      <SpreadsheetComponent ref={((s:SpreadsheetComponent)=>ssObj=s)} height={500}
        created={onCreated}>
        <SheetsDirective>
        {/* frozenColumns={2} frozenRows={1} */}
          <SheetDirective>
            <RangesDirective>
              <RangeDirective dataSource={freezePaneData}></RangeDirective>
            </RangesDirective>
            <ColumnsDirective>
                <ColumnDirective width={80}></ColumnDirective><ColumnDirective width={80}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective><ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective><ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective><ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective><ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective><ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={80}></ColumnDirective><ColumnDirective width={100}></ColumnDirective>
                <ColumnDirective width={100}></ColumnDirective><ColumnDirective width={100}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
}

export default App;
