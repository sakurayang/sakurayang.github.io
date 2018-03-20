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
			);}
			function loaded() {
			window.status="page loade finish!";
			console.log("page load finish!");
			console.timeEnd("load");
			}
