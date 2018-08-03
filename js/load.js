function load (title_name){
	window.addEventListener("load", 
		function() {
			console.time("load");
			console.log("Js loaded");
			window.status="Loading.......";
			console.log("Page loading");
            var wrapper = document.getElementById("wrapper");
			console.log("Delete overlay");
            document.body.removeChild(wrapper);
			document.title = title_name;
			console.log("change Title");
        }
	);
}
function loaded() {
	window.status="page loade finish!";
	console.log("page load finish!");
	console.timeEnd("load");
	if (confirm("是否将主题颜色切换为您的桌面颜色")){
		alert("检测不到您的桌面颜色，请检查您的桌面是否提供API");
		changeColor();
		function changeColor(){
			var color = prompt("请手动输入颜色值","rbga(255 , 255 , 255 , 0.8)");
			if (color != null && color !=''){
				document.body.style.backgroundColor=color;
			} else {
				alert("请检查您的输入");
				changeColor();
			}
		}
	}
}
