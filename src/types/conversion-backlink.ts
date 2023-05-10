export interface ConversionBacklinkAPI {
  conversion_id: string;
  conversion_type: string;
  username: string;
  buyer_id: string;
  offer_id: string;
  offer_type: string;
  backlink_id: string;
  conversion_detail: {
    backlink_url: string;
    target_domain: string;
    action_number: number;
    target_page_duration: number;
    ip_address: string;
    country_code: string;
    user_agent: string;
    sub1: string;
    sub2: string;
    sub3: string;
    sub4: string;
    preview_image: string;
    conversion_commission: number;
  };
  conversion_payout: number;
  conversion_commission: number;
  currency: string;
  conversion_status: string;
  conversion_status_code: number;
  created_hour: number;
  created_date: number;
  created_month: number;
  created_year: number;
  created_time: string;
  expire_time: string;
}
