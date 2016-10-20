import { CollectionView } from 'backbone.marionette';
import itemView from './item-view';

export default CollectionView.extend({
  childView: itemView,
  className: 'container',
});
