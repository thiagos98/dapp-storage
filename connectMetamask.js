function handleAccountsChanged(accounts) {
  console.log("Calling Handle Changed");

  if (accounts.length === 0) {
    console.log("Please connect to metamask");
    $("#enableMetamask").html("Conectar ao metamask");
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    $("#enableMetamask").html(currentAccount);
    $("status").html("");

    if (currentAccount != null) {
      $("#enableMetamask").html(currentAccount).remove("btn-primary");
      $("#enableMetamask").attr("disabled", true);
    }
  }
  console.log("Endereco da conta corrente = " + currentAccount);
}

function connect() {
  console.log("Calling Connect()");

  ethereum
    .request({
      method: "eth_requestAccounts",
    })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
        console.log("Please connect to metamask");
        $("#status").html("Você recusou conectar ao metamask");
      } else {
        console.log(err);
      }
    });
}

function detectMetamask() {
  if (typeof window.ethereum !== "undefined") {
    return true;
  } else {
    return false;
  }
}
