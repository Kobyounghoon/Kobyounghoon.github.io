window.addEventListener("load", work_on);
    function work_on () {
        $(".news_inner").bxSlider( {
            auto:"true",
        });
        $(".recruit_bg").bxSlider( {
            auto:"true",
            mode:"fade",
            speed : 1200
        });

        var header = document.querySelector (".inner");
        var header_ElUls = document.querySelectorAll(".inner > ul");
        var ElLis_arrow = document.querySelectorAll(".inner > ul > li.arrow");
        
        header.addEventListener("click" ,function ( e ) {
            for (var i = 0 ; i < ElLis_arrow.length; i++){
                ElLis_arrow.classList.remove("on")
            }
            for (var j = 0; j <ElLis_arrow.length; j++) {
                if (e.target.parentNode === ElLis_arrow[j]){
                    ElLis_arrow[j].classList.add("on");
                }
            }
            console.log (ElLis_arrow);
        });
        
        
        
        

        
    }