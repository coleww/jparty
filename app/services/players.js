import Ember from 'ember';
import StorageArray from 'ember-local-storage/local/array';
import ENV from '../config/environment';

var PlayerStorage = StorageArray.extend({storageKey: 'jparty-players'});

export default Ember.Service.extend({
  init: function(){
    this._super();
    this._setPlayers();
    var callback = this._setPlayers.bind(this);
    Ember.$(window).on('storage', callback);
  },
  playerStorage: PlayerStorage.create(),
  players: Ember.A([]),
  currentAnswer: null,
  answerWatcher: function(){
    if(this.get('currentAnswer')){
      this.get('players').invoke('set', 'active', true);
    }else {
      this.get('players').invoke('set', 'active', false);
    }
  }.observes('currentAnswer'),

  savePlayers: function(){
    if (!ENV.store_data){
      return;
    }
    var that = this;
    this.get('playerStorage').clear();
    this.get('players').forEach(function(player){
      var playerObj = player.getProperties('name', 'score', 'active');
      that.get('playerStorage').addObject(playerObj);
    });
  },

  _setPlayers: function(){
    this.set('playerStorage', PlayerStorage.create())
    var newGame = !this.get('playerStorage.length') && ENV.store_data;
    var players = Ember.A();
    for(var i=0;i<3;i++){
      var playerData;

      if(newGame){
        playerData = {name: 'Player ' + (i+1), score: 0, active: false};
        this.get('playerStorage').addObject(playerData);
      } else {
        playerData = this.get('playerStorage').objectAt(i);
      }

      var player = Ember.Object.create(playerData);
      players.pushObject(player);
    }
    this.set('players', players);
  }
});
