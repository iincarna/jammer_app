window.onload = function () {
	var fileInput = document.getElementById('fileInput');
	fileInput.addEventListener('change', function (e) {
		var file = fileInput.files[0];
		if (file.type.match('text.xml')) {
			var reader = new FileReader();
			reader.onload = function (e) {
				loadData(reader.result);
			};
			reader.readAsText(file,"UTF-8");
			//reader.readAsDataURL(file);
		} else {
			alert("The file type that you have selected is not supported in this application. Please select an .xml file.")
		}
	});
	navBuilder();
};
var parseXml;
if (typeof window.DOMParser != "undefined") {
    parseXml = function(xmlStr) {
        return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
    };
} else if (typeof window.ActiveXObject != "undefined" &&
       new window.ActiveXObject("Microsoft.XMLDOM")) {
    parseXml = function(xmlStr) {
        var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xmlStr);
        return xmlDoc;
    };
} else {
    throw new Error("No XML parser found");
}