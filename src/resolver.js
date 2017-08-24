import Resolver from 'ember-resolver/resolvers/fallback';
import buildResolverConfig from 'ember-resolver/ember-config';
import config from '../config/environment';

let moduleConfig = buildResolverConfig(config.modulePrefix);
/*
 * If your application has custom types and collections, modify moduleConfig here
 * to add support for them.
 */

moduleConfig.types['drag'] = {
  definitiveCollection: 'drags',
};
moduleConfig.collections['drags'] = {
  types: ['drag']
};

export default Resolver.extend({
  config: moduleConfig
});
