
			$(function() {
				$(".top_menuItemDiv").hide();
				$(".top_menuItem").hover(function() {
					$(this).find(".top_menuItemDiv").stop(true, true);
					$(this).find(".top_menuItemDiv").slideDown();
					$(this).find(".top_menuItemA").addClass("active")

				}, function() {
					$(this).find(".top_menuItemDiv").stop(true, true);
					$(this).find(".top_menuItemDiv").slideUp();
					$(this).find(".top_menuItemA").removeClass("active")
				});
			})