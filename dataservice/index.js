'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var cgUtils = require('../utils.js');
var chalk = require('chalk');
var _ = require('underscore');
var fs = require('fs');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var DataserviceGenerator = module.exports = function DataserviceGenerator(args, options, config) {

    cgUtils.getNameArg(this,args);

    yeoman.generators.Base.apply(this, arguments);

};

util.inherits(DataserviceGenerator, yeoman.generators.Base);

DataserviceGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [];

    cgUtils.addNamePrompt(this,prompts,'dataservice');

    this.prompt(prompts, function (props) {
        if (props.name){
            this.name = props.name;
        }
        cgUtils.askForModuleAndDir('dataservice',this,false,cb);
    }.bind(this));

};

DataserviceGenerator.prototype.files = function files() {
    this.servicename = _.camelize(_.classify(this.name)) + 'DS';

    cgUtils.processTemplates(this.name,this.dir,'dataservice',this,null,null,this.module);

};
