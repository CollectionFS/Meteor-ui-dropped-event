Package.describe({
  summary: "Add dropped event to Meteor UI Templates"
});

Package.on_use(function (api) {
  api.use('ui', 'client');
  api.use('underscore','client');
  api.add_files(['dropped.event.js'], 'client');
});
