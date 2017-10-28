$.fn.youtube = function()
{
	let listaVideo = ["lzas_TSV7II", "9WQHGQR69JI"];
	if (listaVideo.length !== 0)
	{
		for (var i = 0; i < listaVideo.length; i++)
		{
			let contVideo = '<iframe class="contVideo" frameborder="0" allowfullscreen></iframe>';
			let url = 'https://www.youtube.com/embed/' + listaVideo[i];

			let $cont_video = $(contVideo);
			$cont_video.attr('src', url);
			$cont_video.css('width', '50px');
			$cont_video.css('height', '40px');
			$('.videos').append($cont_video);
		};
	}
	else
	{
		$('.videos').html('no hay videos');
	}
}