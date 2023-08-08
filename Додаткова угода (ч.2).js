function setUnitInitiator() {
  const unitName = EdocsApi.findEmployeeSubdivisionByLevelAndEmployeeID(CurrentDocument.initiatorId, 1).unitName;
  if (unitName) {
    setAtrValue("BranchOfContract ", unitName);
  }
}

function setAtrValue(code, value) {
  const codeObj = EdocsApi.getAttributeValue(code);
  codeObj.value = value;
  EdocsApi.setAttributeValue(codeObj);
}

function onCardInitialize() {
  setUnitInitiator();
}
