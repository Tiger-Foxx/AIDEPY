<?php

	require_once 'mailchimp/MCAPI.class.php';
	// MailChimp API Key
	// MailChimp API Key ARTICLE at http://kb.mailchimp.com/accounts/management/about-api-keys#Finding-or-generating-your-API-key
	$api = new MCAPI('b23a7785b1e4ea29fb8a11c5bf7ba53e-us14');
	$merge_vars = array();

	// MailChimp List ID
	// MailChimp List ID ARTICLE at http://kb.mailchimp.com/lists/managing-subscribers/find-your-list-id
	$retval = $api->listSubscribe( 'aac2d16915', $_POST["subscribeemail"], $merge_vars, 'html', false, true );

?>
