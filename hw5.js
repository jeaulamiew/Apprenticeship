function fFileValidate(){//function to validate file
  let txt=document.getElementById('txtFilePath');//read file name that was entered
  if(txt.value.match(/\.jpg$|\.jpeg$|\.png$|\.bmp$/i)){//checking for correct file extensions
    alert('File Validation successful');//alert for successful valiadation
    return true
  }
  else{
    alert('File Name='+txt.value+' is invalid');//alert for invalid file type
    return false
  }
};


function fQueryString(){//function to extract file name from query string
  let strQueryString=location.search;//retrieving querystring
  strQueryString=strQueryString.replace(/^.+?=/,'');//replacing everying until = to extract file name
  alert('Location='+decodeURIComponent(strQueryString));//alert to display modified querystring that has been reduced to file name
}
