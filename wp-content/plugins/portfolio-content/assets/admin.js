jQuery( function ( $ ) {
	var mediaFrame;

	$( '#portfolio-add-screenshots' ).on( 'click', function ( e ) {
		e.preventDefault();

		if ( mediaFrame ) {
			mediaFrame.open();
			return;
		}

		mediaFrame = wp.media( {
			title: 'Select Screenshots',
			button: { text: 'Add to Project' },
			multiple: true,
		} );

		mediaFrame.on( 'select', function () {
			var selection = mediaFrame.state().get( 'selection' );
			selection.each( function ( attachment ) {
				var data = attachment.toJSON();
				var thumbUrl = ( data.sizes && data.sizes.thumbnail ) ? data.sizes.thumbnail.url : data.url;
				addScreenshot( data.id, thumbUrl );
			} );
		} );

		mediaFrame.open();
	} );

	function addScreenshot( id, thumbUrl ) {
		var $preview = $( '#portfolio-screenshots-preview' );
		if ( $preview.find( '[data-id="' + id + '"]' ).length ) {
			return;
		}
		var $item = $(
			'<div class="portfolio-screenshot-item" data-id="' + id + '" style="position:relative;">' +
				'<img src="' + thumbUrl + '" style="width:100px;height:100px;object-fit:cover;display:block;" />' +
				'<button type="button" class="button portfolio-remove-screenshot" style="position:absolute;top:0;right:0;line-height:1;">&times;</button>' +
			'</div>'
		);
		$preview.append( $item );
		syncScreenshotInput();
	}

	$( document ).on( 'click', '.portfolio-remove-screenshot', function () {
		$( this ).closest( '.portfolio-screenshot-item' ).remove();
		syncScreenshotInput();
	} );

	function syncScreenshotInput() {
		var ids = [];
		$( '#portfolio-screenshots-preview .portfolio-screenshot-item' ).each( function () {
			ids.push( $( this ).data( 'id' ) );
		} );
		$( '#portfolio_screenshots_input' ).val( ids.join( ',' ) );
	}

	$( '#portfolio-add-meta-row' ).on( 'click', function ( e ) {
		e.preventDefault();
		var $row = $(
			'<div class="portfolio-extra-meta-row" style="display:flex;gap:8px;margin-bottom:6px;">' +
				'<input type="text" name="portfolio_meta_label[]" placeholder="Label" />' +
				'<input type="text" name="portfolio_meta_value[]" placeholder="Value" style="flex:1;" />' +
				'<button type="button" class="button portfolio-remove-meta-row">&times;</button>' +
			'</div>'
		);
		$( '#portfolio-extra-meta-rows' ).append( $row );
	} );

	$( document ).on( 'click', '.portfolio-remove-meta-row', function () {
		$( this ).closest( '.portfolio-extra-meta-row' ).remove();
	} );
} );
