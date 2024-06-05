import React, { useEffect, useRef, useState } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
interface IProps {
  title?: string;
  handleChange: (value: any) => void;
  value?: any;
}

export const CellInputImageIconMood: React.FC<IProps> = ({
  title,
  handleChange,
  value,
}) => {
  const refInput = useRef<any>(null);
  const [ImagePreview, setImagePreview] = useState<string | null>(null);
  useEffect(() => {
    if (typeof value === "string") {
      setImagePreview(value);
    }
    if (value && typeof value !== "string") {
      setImagePreview(URL.createObjectURL(value));
    }
  }, [value]);

  return (
    <div>
      <div>
        <Input
          type="file"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const file = e.target.files[0];
              handleChange(file);
            }
            if (refInput?.current) {
              refInput.current.value = null;
            }
          }}
          ref={refInput}
          multiple={false}
          accept="image/*"
        />

        <Label
          htmlFor="files_picture"
          onClick={() => {
            if (refInput?.current) {
              refInput?.current?.click();
            }
          }}
        >
          <div className="border border-ui-border  border-dashed rounded-2 cursor-pointer hover:opacity-80 bg-neutral-50">
            {ImagePreview ? (
              <img
                src={ImagePreview}
                alt="img_preview"
                className="p-1 object-cover w-full h-full aspect-square"
              />
            ) : (
              <div className="p-6 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    d="M12.4395 22.9355L8.04199 17.7207L3.98438 22.5342V23.7031H26.0156V22.8125L19.2803 14.8262L12.4395 22.9355Z"
                    fill="#F2F4F7"
                  />
                  <path
                    d="M3.98438 19.6221L7.86328 15.0225C7.95703 14.9111 8.12695 14.9111 8.2207 15.0225L12.4395 20.0234L19.1016 12.125C19.1953 12.0137 19.3652 12.0137 19.459 12.125L26.0156 19.9004V7.29688H3.98438V19.6221ZM8.90625 8.70312C9.24481 8.70312 9.58006 8.76981 9.89286 8.89937C10.2056 9.02894 10.4899 9.21884 10.7293 9.45824C10.9687 9.69764 11.1586 9.98185 11.2881 10.2946C11.4177 10.6074 11.4844 10.9427 11.4844 11.2812C11.4844 11.6198 11.4177 11.9551 11.2881 12.2679C11.1586 12.5806 10.9687 12.8649 10.7293 13.1043C10.4899 13.3437 10.2056 13.5336 9.89286 13.6631C9.58006 13.7927 9.24481 13.8594 8.90625 13.8594C8.22249 13.8594 7.56673 13.5878 7.08324 13.1043C6.59975 12.6208 6.32812 11.965 6.32812 11.2812C6.32812 10.5975 6.59975 9.94173 7.08324 9.45824C7.56673 8.97475 8.22249 8.70312 8.90625 8.70312Z"
                    fill="#F2F4F7"
                  />
                  <path
                    d="M8.08594 11.2812C8.08594 11.4988 8.17236 11.7075 8.3262 11.8613C8.48004 12.0151 8.68869 12.1016 8.90625 12.1016C9.12381 12.1016 9.33246 12.0151 9.4863 11.8613C9.64014 11.7075 9.72656 11.4988 9.72656 11.2812C9.72656 11.0637 9.64014 10.855 9.4863 10.7012C9.33246 10.5474 9.12381 10.4609 8.90625 10.4609C8.68869 10.4609 8.48004 10.5474 8.3262 10.7012C8.17236 10.855 8.08594 11.0637 8.08594 11.2812Z"
                    fill="#F2F4F7"
                  />
                  <path
                    d="M27.1875 5.1875H2.8125C2.29395 5.1875 1.875 5.60645 1.875 6.125V24.875C1.875 25.3936 2.29395 25.8125 2.8125 25.8125H27.1875C27.7061 25.8125 28.125 25.3936 28.125 24.875V6.125C28.125 5.60645 27.7061 5.1875 27.1875 5.1875ZM26.0156 23.7031H3.98438V22.5342L8.04199 17.7207L12.4395 22.9355L19.2803 14.8262L26.0156 22.8125V23.7031ZM26.0156 19.9004L19.459 12.125C19.3652 12.0137 19.1953 12.0137 19.1016 12.125L12.4395 20.0234L8.2207 15.0225C8.12695 14.9111 7.95703 14.9111 7.86328 15.0225L3.98438 19.6221V7.29688H26.0156V19.9004Z"
                    fill="#D0D5DD"
                  />
                  <path
                    d="M8.90625 13.8594C9.24481 13.8594 9.58006 13.7927 9.89286 13.6631C10.2056 13.5336 10.4899 13.3437 10.7293 13.1043C10.9687 12.8649 11.1586 12.5806 11.2881 12.2679C11.4177 11.9551 11.4844 11.6198 11.4844 11.2812C11.4844 10.9427 11.4177 10.6074 11.2881 10.2946C11.1586 9.98185 10.9687 9.69764 10.7293 9.45824C10.4899 9.21884 10.2056 9.02894 9.89286 8.89937C9.58006 8.76981 9.24481 8.70312 8.90625 8.70312C8.22249 8.70312 7.56673 8.97475 7.08324 9.45824C6.59975 9.94173 6.32812 10.5975 6.32812 11.2812C6.32812 11.965 6.59975 12.6208 7.08324 13.1043C7.56673 13.5878 8.22249 13.8594 8.90625 13.8594ZM8.90625 10.4609C9.36035 10.4609 9.72656 10.8271 9.72656 11.2812C9.72656 11.7354 9.36035 12.1016 8.90625 12.1016C8.45215 12.1016 8.08594 11.7354 8.08594 11.2812C8.08594 10.8271 8.45215 10.4609 8.90625 10.4609Z"
                    fill="#D0D5DD"
                  />
                </svg>
                <p className="typo-s14-w400 pt-2">Upload</p>
              </div>
            )}
          </div>
        </Label>
      </div>
      <p className="typo-s12-w500 text-neutral-800 text-center pt-1">{title}</p>
    </div>
  );
};
