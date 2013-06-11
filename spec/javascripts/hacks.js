// hacks for ember, this sets up our app for testing

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
document.write('<style>#ember-testing-container { position: absolute; background: white; bottom: 0; right: 0; width: 640px; height: 384px; overflow: auto; z-index: 9999; border: 1px solid #ccc; } #ember-testing { zoom: 50%; }</style>');

$(document).ready(function() {


  Discourse.rootElement = '#ember-testing';
  Discourse.setupForTesting();
  Discourse.injectTestHelpers();
  Discourse.SiteSettings = {"title":"Discourse Meta","logo_url":"/assets/logo.png","logo_small_url":"/assets/logo-single.png","traditional_markdown_linebreaks":false,"top_menu":"latest|new|unread|read|favorited|categories","post_menu":"like|edit|flag|delete|share|bookmark|reply","share_links":"twitter|facebook|google+|email","track_external_right_clicks":false,"must_approve_users":false,"ga_tracking_code":"UA-33736483-2","ga_domain_name":"","enable_long_polling":true,"polling_interval":3000,"anon_polling_interval":30000,"min_post_length":20,"max_post_length":16000,"min_topic_title_length":15,"max_topic_title_length":255,"min_private_message_title_length":2,"allow_uncategorized_topics":true,"min_search_term_length":3,"flush_timings_secs":5,"supress_reply_directly_below":true,"email_domains_blacklist":"mailinator.com","email_domains_whitelist":null,"version_checks":true,"min_title_similar_length":10,"min_body_similar_length":15,"category_colors":"BF1E2E|F1592A|F7941D|9EB83B|3AB54A|12A89D|25AAE2|0E76BD|652D90|92278F|ED207B|8C6238|231F20|808281|B3B5B4|283890","max_upload_size_kb":1024,"category_featured_topics":6,"favicon_url":"/assets/favicon.ico","dynamic_favicon":false,"uncategorized_name":"uncategorized","uncategorized_color":"AB9364","uncategorized_text_color":"FFFFFF","invite_only":false,"login_required":false,"enable_local_logins":true,"enable_local_account_create":true,"enable_google_logins":true,"enable_yahoo_logins":true,"enable_twitter_logins":true,"enable_facebook_logins":true,"enable_cas_logins":false,"enable_github_logins":true,"enable_persona_logins":true,"educate_until_posts":2,"topic_views_heat_low":1000,"topic_views_heat_medium":2000,"topic_views_heat_high":5000};

  Discourse.Router.map(function() {
    this.route("jasmine",{path: "/jasmine"});
    Discourse.routeBuilder.apply(this)
  });
});
