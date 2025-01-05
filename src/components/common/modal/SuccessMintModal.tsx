import { Dialog, DialogPanel } from '@headlessui/react';
import IconSvg from '../ui/IconSvg';
import { useState, useEffect } from 'react';
import Button from 'src/components/button/Button';

interface Props {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  openRedeemedModal: (value: boolean) => void;
  reward: string;
}

function SuccessMintModal({ isOpen, onClose, openRedeemedModal, reward }: Props) {
  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-grayscale-900/50">
        <div className="flex items-center justify-center min-h-full p-4">
          <DialogPanel
            transition
            className="relative w-full p-10 border-2 rounded-md max-w-fit bg-grayscale-800 border-grayscale-700 max-h-[95vh] overflow-y-auto no-scrollbar"
          >
            <button type="button" className="absolute top-[11px] right-[13px]" onClick={() => onClose(false)}>
              <IconSvg icon="closeM" className="text-grayscale-400" />
            </button>

            <div className="max-w-[595px] space-y-6">
              <img
                src="/assets/images/credit.png"
                className="max-w-[595px] max-h-[585px] rounded-md w-full"
              />

              <h2 className="uppercase text-brand-primary-light">{reward} credits</h2>

              <div className="w-full border-b-2 border-grayscale-700"></div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="mb-[5px] text-sm text-grayscale-300">Estimated value</div>

                  <div className="text-lg font-semibold text-grayscale-100">≈ 0,000</div>
                </div>

                <div>
                  <div className="mb-[5px] text-sm text-grayscale-300">Points earned</div>

                  <div className="flex items-center gap-[9px]">
                    <IconSvg icon="starS" />

                    <div className="text-lg font-semibold text-grayscale-100">220</div>
                  </div>
                </div>

                <button
                  className={`py-[6px] text-grayscale-200 px-[16px] bg-rarity-uncommon-dark flex gap-2 font-semibold text-sm h-fit rounded-md items-center`}
                >
                  <IconSvg icon="uncommonM" />
                  <span>Uncommon</span>
                </button>
              </div>

              <div className="flex flex-col">
                <h5 className="text-grayscale-200 mb-[11px]">Description</h5>

                <p className="text-grayscale-400">
                  Redeem your reward to receive a promo code, which you can use on qiibee to get
                  VIR.
                </p>
              </div>

              <div
                className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
                onClick={() => onClose(false)}
              >
                <Button size="m" type="primary" classNames="min-w-[232px]">
                  Open More
                </Button>

                {/* <Button size="m" type="secondary" classNames="min-w-[232px]">
                  Share on <IconSvg icon="twitterM" className="text-grayscale-900" />
                </Button> */}
              </div>

              <p
                className="text-center text-white underline cursor-pointer underline-offset-2"
                onClick={() => openRedeemedModal(true)}
              >
                Redeem credits for promo code
              </p>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default SuccessMintModal;
