import mongoose from 'mongoose';

const OfferBacklinkSchema = new mongoose.Schema({
  "_id": {
    "type": "ObjectId"
  },
  "offer_name": {
    "type": "String"
  },
  "offer_id": {
    "type": "String"
  },
  "buyer_id": {
    "type": "String"
  },
  "target_domain": {
    "type": "String"
  },
  "start_time": {
    "type": "Date"
  },
  "end_time": {
    "type": "Date"
  },
  "target_page_duration": {
    "type": "Number"
  },
  "daily_traffic": {
    "type": "Number"
  },
  "conversion_payout": {
    "type": "Number"
  },
  "status_code": {
    "type": "Number"
  },
  "backlinks": {
    "type": [
      "String"
    ]
  },
  "created_at": {
    "type": "Date",
    "default": Date.now
  },
  "updated_at": {
    "type": "Date",
    "default": Date.now
  },
}, {collection: 'offer-backlink'});

const OfferBackLink = mongoose.models['offer-backlink']  || mongoose.model('offer-backlink', OfferBacklinkSchema);

export default OfferBackLink;
