import CompositeReader from './CompositeReader';
import IndexReader from './IndexReader';

export default abstract class BaseCompositeReader<R extends IndexReader> extends CompositeReader {
}