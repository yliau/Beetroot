"use strict";!function(e){e(function(){e(".team__slider").slick({slidesToScroll:1,infinite:!0,speed:300,slidesToShow:3,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})})}(jQuery);var form=$("#contactForm");function initMap(){var e={lat:49.062785,lng:33.4156805},l=new google.maps.Map(document.getElementById("map"),{center:e,zoom:15,scrollwheel:!1,styles:[{elementType:"geometry",stylers:[{color:"#c8c4da"}]},{elementType:"labels.icon",stylers:[{color:"#f3f8f7"},{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#b4aecc"},{weight:2.5}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#c8c4da"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#c4c0d5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#c4c0d5"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#a49fae"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#e1cd7b"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#c0a32c"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{color:"#f4d335"},{lightness:15},{weight:2.5}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#827240"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#c4c0d5"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#9eace5"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]});new google.maps.Marker({map:l,position:e,icon:"img/map-marker.png"})}form.on("submit",function(e){e.preventDefault()}),$(".up").on("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),$(function(){$(window).scroll(function(){var e=$(window).scrollTop();100<e?$("nav").addClass("navShadow"):$("nav").removeClass("navShadow"),100<e?$("ul").css("top","100px"):$("ul").css("top","160px")}),$("#logo").on("click",function(){$("html,body").animate({scrollTop:0},4)}),$('a[href*="#"]').on("click",function(e){$("html,body").animate({scrollTop:$($(this).attr("href")).offset().top-100},4),e.preventDefault()}),$("#menu-toggle").on("click",function(){$("#menu-toggle").toggleClass("closeMenu"),$("ul").toggleClass("showMenu"),$("li").on("click",function(){$("ul").removeClass("showMenu"),$("#menu-toggle").removeClass("closeMenu")})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwic2xpY2siLCJzbGlkZXNUb1Njcm9sbCIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwialF1ZXJ5IiwiZm9ybSIsIm15TGF0TG5nIiwibGF0IiwibG5nIiwibWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjZW50ZXIiLCJ6b29tIiwic2Nyb2xsd2hlZWwiLCJzdHlsZXMiLCJlbGVtZW50VHlwZSIsInN0eWxlcnMiLCJjb2xvciIsInZpc2liaWxpdHkiLCJmZWF0dXJlVHlwZSIsIndlaWdodCIsInBvc2l0aW9uIiwiaWNvbiIsImltYWdlIiwid2luZG93VG9wIiwic2Nyb2xsVG9wIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIk1hcmtlciIsImUiLCJvbiIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJzY3JvbGwiLCJhZGRDbGFzcyIsImNzcyIsImFuaW1hdGUiLCJ0aGlzIiwiYXR0ciIsIm9mZnNldCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiY0FBQyxTQUFFQSxHQUFIQSxFQUFBLFdBR0VBLEVBQUUsaUJBQWlCQyxNQUFNLENBRjFCQyxlQUFBLEVBS0VDLFVBQVUsRUFKWEMsTUFBQyxJQUNESixhQUFFLEVBRURFLFdBQUFBLENBQ0FDLENBQ0FDLFdBSndCLElBSzNCQyxTQUFBQSxDQUVBQyxhQUNJLEVBQ0VDLGVBREYsSUFJSUwsQ0FGUUssV0FBQSxJQUZaQyxTQU9BLENBQ0VELGFBQWEsRUFDYkMsZUFBVSxTQXBCZixDQUVDQyxRQTRCRixJQUFNQyxLQUFPVixFQUFFLGdCQWNkLFNBQUlXLFVBQVlDLElBQUFBLEVBQUssQ0FBQUEsSUFBTixVQUFBQyxJQUFBLFlBa01GQyxFQUFNLElBQUlDLE9BQU9DLEtBQUtDLElBQUlDLFNB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QUNGSixFQUFFYSxtQkFJSG5ELEVBQUUsZ0JBQWdCdUMsR0FBRyxRQUFTLFdBQzdCdkMsRUFBRSxnQkFBZ0JtQyxZQUFZLGFBQzlCbkMsRUFBRSxNQUFNbUMsWUFBWSxZQUVwQm5DLEVBQUUsTUFBTXVDLEdBQUcsUUFBUyxXQUNuQnZDLEVBQUUsTUFBTW9DLFlBQVksWUFDcEJwQyxFQUFFLGdCQUFnQm9DLFlBQVkiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiOygoJCkgPT4ge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHQkKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcudGVhbV9fc2xpZGVyJykuc2xpY2soe1xyXG5cdFx0XHQvLyBkb3RzOiB0cnVlLFxyXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0aW5maW5pdGU6IHRydWUsXHJcblx0XHRcdHNwZWVkOiAzMDAsXHJcbnNsaWRlc1RvU2hvdzogMyxcclxuXHJcbnJlc3BvbnNpdmU6IFsgICBcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAgNzY4LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICB9XHJcbiAgICB9ICAgIFxyXG4gIF1cdFx0XHRcclxuXHRcdH0pO1xyXG5cdH0pXHJcbn0pKGpRdWVyeSk7XHJcblxyXG5jb25zdCBmb3JtID0gJCgnI2NvbnRhY3RGb3JtJyk7XHJcbmZvcm0ub24oJ3N1Ym1pdCcsIChlKSA9PiB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoJy51cCcpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuXHRsZXQgbXlMYXRMbmcgPSB7bGF0OiA0OS4wNjI3ODUsIGxuZzogMzMuNDE1NjgwNX07XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9IFtcclxuICB7XHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiI2M4YzRkYVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjZjNmOGY3XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiM2MTYxNjFcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmNWY1ZjVcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubGFuZF9wYXJjZWxcIixcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNiNGFlY2NcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJ3ZWlnaHRcIjogMi41XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjYzhjNGRhXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzc1NzU3NVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNjNGMwZDVcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNjNGMwZDVcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNhNDlmYWVcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzc1NzU3NVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjZTFjZDdiXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjYzBhMzJjXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0XCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNmNGQzMzVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJsaWdodG5lc3NcIjogMTVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwid2VpZ2h0XCI6IDIuNVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjODI3MjQwXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiM5ZTllOWVcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5saW5lXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiI2U1ZTVlNVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LnN0YXRpb25cIixcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjYzRjMGQ1XCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzllYWNlNVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzllOWU5ZVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbl1cclxuICAgICAgICAvLyBDcmVhdGUgYSBtYXAgb2JqZWN0IGFuZCBzcGVjaWZ5IHRoZSBET00gZWxlbWVudFxyXG4gICAgICAgIC8vIGZvciBkaXNwbGF5LlxyXG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgXHRjZW50ZXI6IG15TGF0TG5nLFxyXG4gICAgICAgIFx0em9vbTogMTUsXHJcbiAgICAgICAgXHRzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAgICAgXHRzdHlsZXM6IHN0eWxlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuY29uc3QgaW1hZ2UgPSAnaW1nL21hcC1tYXJrZXIucG5nJztcclxuXHJcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgIFx0bWFwOiBtYXAsXHJcbiAgICAgICAgXHRwb3NpdGlvbjogbXlMYXRMbmcsXHJcbiAgICAgICAgXHRpY29uOiBpbWFnZSxcclxuICAgICAgICBcdFxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAkKCAoKSA9PiB7XHJcblxyXG5cdC8vT24gU2Nyb2xsIEZ1bmN0aW9uYWxpdHlcclxuXHQkKHdpbmRvdykuc2Nyb2xsKCAoKSA9PiB7XHJcblx0XHR2YXIgd2luZG93VG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdFx0d2luZG93VG9wID4gMTAwID8gJCgnbmF2JykuYWRkQ2xhc3MoJ25hdlNoYWRvdycpIDogJCgnbmF2JykucmVtb3ZlQ2xhc3MoJ25hdlNoYWRvdycpO1xyXG5cdFx0d2luZG93VG9wID4gMTAwID8gJCgndWwnKS5jc3MoJ3RvcCcsJzEwMHB4JykgOiAkKCd1bCcpLmNzcygndG9wJywnMTYwcHgnKTtcclxuXHR9KTtcclxuXHRcclxuXHQvL0NsaWNrIExvZ28gVG8gU2Nyb2xsIFRvIFRvcFxyXG5cdCQoJyNsb2dvJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogMCxcclxuXHRcdH0sNCk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly9TbW9vdGggU2Nyb2xsaW5nIFVzaW5nIE5hdmlnYXRpb24gTWVudVxyXG5cdCQoJ2FbaHJlZio9XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0c2Nyb2xsVG9wOiAkKCQodGhpcykuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3AgLSAxMDBcclxuXHRcdH0sNCk7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly9Ub2dnbGUgTWVudVxyXG5cdCQoJyNtZW51LXRvZ2dsZScpLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdCQoJyNtZW51LXRvZ2dsZScpLnRvZ2dsZUNsYXNzKCdjbG9zZU1lbnUnKTtcclxuXHRcdCQoJ3VsJykudG9nZ2xlQ2xhc3MoJ3Nob3dNZW51Jyk7XHJcblx0XHRcclxuXHRcdCQoJ2xpJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHQkKCd1bCcpLnJlbW92ZUNsYXNzKCdzaG93TWVudScpO1xyXG5cdFx0XHQkKCcjbWVudS10b2dnbGUnKS5yZW1vdmVDbGFzcygnY2xvc2VNZW51Jyk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxufSk7XHJcbiJdfQ==
