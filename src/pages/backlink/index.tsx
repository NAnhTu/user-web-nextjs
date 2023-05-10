import CardComponent from '@/components/Card';
import { formatCurrency } from '@/utils/utils';
import { ConversionBacklinkAPI } from '@/types/conversion-backlink';
import { Image, Card, Button } from 'antd';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

interface BacklinkProps {
  conversion: ConversionBacklinkAPI
}

const Index = ({conversion}: BacklinkProps) => {
  const [imgBacklink, setImgBacklink] = useState<string>("");
  useEffect(() => {
    console.log(process.env);
    setImgBacklink(`${process.env.NEXT_PUBLIC_IMG_PATH}/${conversion?.conversion_detail.preview_image}`)
  }, [])
  return (
    <>
      <main className={`p-2 md:p-5 ${!!conversion ? 'hidden' : ''}`}>
        <CardComponent>
          <div>
            <Button>Nhận nhiệm vụ</Button>
          </div>
        </CardComponent>
      </main>
      <main className={`p-2 md:p-5 ${!conversion ? 'hidden' : ''}`}>
        <CardComponent>
          <div className='mb-5'>
            <h1 className='text-3xl'>Nhiệm vụ dành cho bạn</h1>
          </div>
          <div className='flex justify-center w-full'>
            <div className='w-full md:w-3/4'>
              <h2 className='mb-5 text-2xl'>Bạn sẽ nhận được <span className='font-bold text-green-500'>{formatCurrency(conversion?.conversion_commission || 0)}</span> sau khi hoàn thành nhiệm vụ.</h2>
              <div className='mission'>
                <div className='flex border-b border-late-50 flex-col md:flex-row'>
                  <div className='p-2 md:p-5 text-xl font-bold whitespace-nowrap'>Bước 1:	</div>
                  <div className='p-2 md:p-5 text-base md:text-xl'>Truy cập
                    <a href={conversion?.conversion_detail.backlink_url} className='ml-2 text-blue-500 decoration-blue-500 inline-block break-all' target='_blank'>
                      {conversion?.conversion_detail.backlink_url}
                    </a>
                  </div>
                </div>
                <div className='flex border-b border-late-50 flex-col md:flex-row'>
                  <div className='p-2 md:p-5 text-xl font-bold whitespace-nowrap'>Bước 2:	</div>
                  <div className='p-2 md:p-5 text-base md:text-xl'>
                    <p className='mb-3'>Bấm vào liên kết như mô tả (Bấm vào hình để phóng to)</p>
                    <Image height={200} src={imgBacklink} alt=''/>
                  </div>
                </div>
                <div className='flex border-b border-late-50 flex-col md:flex-row'>
                  <div className='p-2 md:p-5 text-xl font-bold whitespace-nowrap'>Bước 3:	</div>
                  <div className='p-2 md:p-5 text-base md:text-xl'>
                    Bạn được chuyển hướng đến trang <span className='font-bold'>{conversion?.conversion_detail.target_domain}</span>. (Nếu trang bạn được chuyển đến không phải là <span className='font-bold'>{conversion?.conversion_detail.target_domain}</span>, vui lòng thực hiện lại từ bước 2.
                  </div>
                </div>
                <div className='flex border-b border-late-50 flex-col md:flex-row'>
                  <div className='p-2 md:p-5 text-xl font-bold whitespace-nowrap'>Bước 4:	</div>
                  <div className='p-2 md:p-5 text-base md:text-xl'>Ở lại trên trang <span className='font-bold'>{conversion?.conversion_detail.target_page_duration}</span> giây</div>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <div className='p-2 md:p-5 text-xl font-bold whitespace-nowrap'>Bước 5:	</div>
                  <div className='p-2 md:p-5 text-base md:text-xl'>Quay lại đây, bấm Xác thực người dùng và bấm nút Hoàn thành nhiệm vụ</div>
                </div>
              </div>
              <div className='w-full flex justify-center'>
                <Button size='large' className='w-40 m-4 p-2 md:p-5 bg-green-500 text-white hover:text-white'>HOÀN THÀNH</Button>
                <Button size='large' className='w-40 m-4 p-2 md:p-5 bg-red-500 text-white hover:text-white'>BỎ QUA</Button>
              </div>
            </div>
          </div>
        </CardComponent>
      </main>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const response = await fetch('https://testapi.io/api/tunaeway/backlink')
  const data = await response.json()

  return {
    props: {
      conversion: data
    }
  }
}