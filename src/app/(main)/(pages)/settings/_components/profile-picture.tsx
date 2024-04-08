"use client";
import React from "react";
import UploadCareButton from "./upload-care";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
type Props = {
  userImage: string | null;
  onDelete?: any;
  onUpload?: any;
};

const ProfilePicture = ({ userImage, onUpload, onDelete }: Props) => {
  const router = useRouter();
  const onRemoveProfileImage = async () => {
    const response = await onDelete();
    if (response) {
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12 rounded-lg">
              <Image
                src={userImage}
                alt="User_Image"
                fill
                className=" rounded-full shadow-lg hover:shadow-slate-500"
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
        {/* <UploadCareButton /> */}
      </div>
    </div>
  );
};

export default ProfilePicture;
