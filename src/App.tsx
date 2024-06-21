import './App.module.css';
import { useEffect, useRef, useState } from 'react';
import DocumentIcon from './Assets/Images/document.svg';
import StampIcon from './Assets/Images/signstamp.svg';
import BatchIcon from './Assets/Images/batch.svg';
import AdvancedIcon from './Assets/Images/advanced.svg';
import ExportIcon from './Assets/Images/export.svg';
import { TabButton } from './Components/TabButton';
import { DocumentScanner } from './Components/TabAnimations/DocumentScanner';
import { SignAndStamp } from './Components/TabAnimations/SignAndStamp';
import { BatchAndScanning } from './Components/TabAnimations/BatchAndScanning';
import { AdvancedFilters } from './Components/TabAnimations/AdvancedFilters';
import { ExportAndShare } from './Components/TabAnimations/ExportAndShare';

export function App() {
  const tabs = [
    {
      id: 'documentScanner',
      name: 'Document Scanner',
      icon: DocumentIcon,
      title: 'Scan with Ease',
      description:
        'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
    },
    {
      id: 'signAndStamp',
      name: 'Sign & Stamp',
      icon: StampIcon,
      title: 'One-Tap Focus',
      description:
        'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    },
    {
      id: 'batchScanning',
      name: 'Batch Scanning',
      icon: BatchIcon,
      title: 'Multiple Page Scan',
      description:
        'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    },
    {
      id: 'advancedFilters',
      name: 'Advanced Filters',
      icon: AdvancedIcon,
      title: 'Unique Filters',
      description:
        'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    },
    {
      id: 'exportAndShare',
      name: 'Export & Share',
      icon: ExportIcon,
      title: 'All-Round Conversion',
      description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  let scrollTimeout: any;

  const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      onScrollStop();
    }, 200);
  };

  const onScrollStop = (index?: number) => {
    const container = buttonContainerRef?.current;

    if (container && container.scrollLeft !== undefined) {
      const padding = (window.innerWidth - 260) / 2;
      const scrollPosition = container.scrollLeft;
      const scrollIndex = index ? index : Math.round(scrollPosition / 260);

      container.scrollTo({
        left: scrollIndex * 260 - padding,
        behavior: 'smooth',
      });
    }
  };

  const handleClick = (item: any, index: number) => {
    setSelectedTab(item);
    clearTimeout(scrollTimeout);
    onScrollStop(index);
  };

  return (
    <>
      <main className="flex  flex-col justify-center items-center w-full h-auto lg:h-screen">
        <div className="w-screen h-[calc(100vh-100px)] p-0 lg:px-28 lg:pt-10 lg:pb-0  ">
          <div className="w-full h-full lg:h-full flex flex-col flex-col-reverse lg:flex-row justify-between items-center lg:items-stretch">
            <div className="relative h-auto w-full lg:w-[612px] flex items-end justify-center overflow-hidden ">
              <div className="mobile-device-container">
                {selectedTab.id === 'documentScanner' && <DocumentScanner />}
                {selectedTab.id === 'signAndStamp' && <SignAndStamp />}
                {selectedTab.id === 'batchScanning' && <BatchAndScanning />}
                {selectedTab.id === 'advancedFilters' && <AdvancedFilters />}
                {selectedTab.id === 'exportAndShare' && <ExportAndShare />}
              </div>
            </div>
            <div className="p-2 pt-10 lg:p-0 flex w-full lg:w-[556px] flex-col items-center lg:items-end justify-center gap-2">
              <span className="text-center lg:text-right text-primary text-[16px] font-bold tracking-[2px] uppercase">
                {selectedTab.name}
              </span>
              <span className="text-center lg:text-right text-[32px] font-[700] ">
                {selectedTab.title}
              </span>
              <span className="text-center lg:text-right text-[14px] lg:text-[18px] font-[400] tracking-[0.8px] font-light leading-[28px] lg:leading-[32px] ">
                {selectedTab.description}
              </span>
              <button className="border border-[#ccc] text-[14px] lg:text-[20px] font-[400] px-3 py-2 lg:px-5 lg:py-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div
          ref={buttonContainerRef}
          onTouchEnd={handleScroll}
          className="relative overflow-auto lg:relative bottom-0 w-full lg:w-full h-[100px] flex  "
        >
          {tabs.map((item: any, index: number) => (
            <TabButton
              id={index}
              key={index}
              className={`w-[260px] lg:w-1/5 px-10 ${index === tabs.length - 1 ? '' : 'border border-r,ght'}`}
              onClick={() => handleClick(item, index)}
              icon={item.icon}
              name={item.name}
              isActive={selectedTab?.id === item.id ? true : false}
            />
          ))}
        </div>
      </main>
    </>
  );
}
