$.fn.youtube = function(listaVideo, width="100px", height="80px")
{
	if (listaVideo.length !== 0)
	{
		for (var i = 0; i < listaVideo.length; i++)
		{
			let contVideo = '<iframe class="contVideo" frameborder="0" allowfullscreen></iframe>';
			let url = 'https://www.youtube.com/embed/' + listaVideo[i];

			let $cont_video = $(contVideo);
			$cont_video.attr('src', url);
			$cont_video.css('width', width);
			$cont_video.css('height', height);
			$(this).append($cont_video);
		};
	}
	else
	{
		$(this).html('no hay videos');
	}
}