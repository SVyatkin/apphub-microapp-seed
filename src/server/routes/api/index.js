const controller = require('./controller');
const log = require('../../common/logger')('controllers:api');
const asyncMiddleware = require('../../middleware/async-middleware');
/**
 * @description Example middleware
 * 
 * {
    "doc_count": 50,
    "update_seq": 50,
    "backend_adapter": "LevelDOWN",
    "db_name": "apphub-microapp-seed",
    "auto_compaction": false,
    "adapter": "leveldb",
    "disk_size": 29695,
    "instance_start_time": "1520376444740"
}
 */
module.exports = {
  '/': {
    get: controller.index
  },
  '/db': {
    get: controller.info,
    post: controller.post
  },
  '/db/_all_docs': {
    get: controller.allDocs
  },
  '/db/_bulk_docs': {
    post: controller.bulkDocs
  },
  '/db/:id': {
    get: controller.get,
    put: controller.put,
    delete: controller.delete
  }
};
