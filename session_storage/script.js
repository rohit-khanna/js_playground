function read() {
    // this value can be  set from parent/previous html page
    const value = sessionStorage.getItem("test_key");
    document.getElementById("divTestKey").innerText = value || "{no-data}";
  }

  function writeVal() {
    const inputVal = document.getElementById("inputOverride").value;
    sessionStorage.setItem("test_key", inputVal);
    document.getElementById("inputOverride").value="";
    read();
  }