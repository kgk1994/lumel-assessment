 inputArray = {
  "dimensions": [{
    "id": "dimension_re",
    "values": ["East", "East", "West", "SouthWest", "South","NorthEast"]
  }, {
    "id": "dimension_cnt",
    "values": ["London", "Italy", "Germany", "US", "Russia","India"]
  },{
    "id": "measure_sales",
    "values": [100, 156, 432, 462, 25,100]
  }, {
    "id": "measure_qty",
    "values": [85, 34, 153, 434, 52, 43]
  }, {
    "id": "measure_profit",
    "values": [123, 45, 421, 465, 451, 56]
  }],
  "metadata": [ {
    "id": "measure_sales",
    "label": "Sales",
    "type":"number"
  }, {
    "id": "measure_qty",
    "label": "Quantity",
     "type":"number"
  }, {
    "id": "measure_profit",
    "label": "Profit",
     "type":"number"
  },{
    "id": "dimension_re",
    "label": "Region",
    "type":"string"
  }, {
    "id": "dimension_cnt",
    "label": "County",
    "type":"string"
  }]
}
let expectedOutput = []
let expObj = {};
inputArray.dimensions.forEach((dimElement,dimIndex) => {
    let obj = inputArray['metadata'].find(x => x.id === dimElement.id);
    dimElement.values.forEach((ValueElement,valueIndex) => {
        if(dimIndex ==0){
            expectedOutput.push({[obj.label]:ValueElement})
        }else{
            expectedOutput[valueIndex][obj.label] = ValueElement
        }
    })
});

console.log(expectedOutput);

