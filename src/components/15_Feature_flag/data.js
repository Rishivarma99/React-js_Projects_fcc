

const dummyapiresponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeView: false,
  showTabs: true
}

function featureFlagsDataServiceCall() {

  return new Promise((resolve, reject) => {

    if (dummyapiresponse) setTimeout(resolve(dummyapiresponse), 500);
    else reject("Some error occured please try again")

  })

}

export default featureFlagsDataServiceCall;