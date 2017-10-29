$.fn.youtube = function(listaVideo, width="100%", height)
{
	if (listaVideo.length !== 0)
	{
		for (var i = 0; i < listaVideo.length; i++)
		{
			let contVideo = '<iframe class="videoYT" frameborder="0" allowfullscreen></iframe>';
			let URL = 'https://www.youtube.com/embed/' + listaVideo[i].url;
			console.log(URL);
			let $cont_video = $(contVideo);
			$cont_video.attr('src', URL);
			$cont_video.css('width', width);
			$cont_video.css('height', height)
			$(this).append($cont_video);			
		};
	}
	else
	{
		$(this).html('<h3 class="text-center">Lo sentimos :(. No hay videos para mostrar.</h3>');
	}
}