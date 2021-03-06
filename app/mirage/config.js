export default function() {
  this.urlPrefix = '';
  this.namespace = 'api';
  this.timing = 100;

  this.get('/categories', function(db){
    return db.categories;
  });

  this.get('/clues', function(db, request){
    var category_id = +request.queryParams.category;
    var value = +request.queryParams.value;
    var answers = db.answers.where({category_id: category_id, value: value});

    return answers;
  });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Default config
  */
    // make this `api`, for example, if your API is namespaced
  //      delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.find(key, id)
      - db.findAll(key)
      - db.findQuery(key, query)
      - db.push(key, data)
      - db.remove(key, id)
      - db.removeQuery(key, query)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;
      var contact = db.find('contact', contactId);
      var addresses = db.findAll('address')
        .filterBy('contact_id', contactId);

      return {
        contact: contact,
        addresses: addresses
      };
    });

  */
}
