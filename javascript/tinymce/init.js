tinyMCE.init({
	// General options
	mode : "textareas",
	skin_variant : "silver",		
	plugins : "code, image, imagetools, table, media, preview, link, charmap",
	width:"680px",
	height:"300px",

	// Theme options
	//theme_advanced_buttons1 : "undo,redo,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,forecolor,backcolor,removeformat,fontsizeselect,bullist,outdent,indent,link,|,image,code,charmap,emotions,advhr,|,search,print,table",
	theme_advanced_buttons1 : "code",
	theme_advanced_buttons2 : "",
	theme_advanced_buttons3 : "",
	theme_advanced_buttons4 : "",
	theme_advanced_toolbar_location : "top",
	theme_advanced_toolbar_align : "left",
	theme_advanced_statusbar_location : "bottom",
	theme_advanced_resizing : true,

	// Example content CSS (should be your site CSS)
	//content_css : "design/tinymce.css"
});
