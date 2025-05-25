'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Upload } from 'lucide-react';

interface FileUploadProps {
  onUpload: (url: string) => void;
}

export function FileUpload({ onUpload }: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setIsUploading(true);

    // Simulate file upload
    setTimeout(() => {
      setIsUploading(false);
      // In a real app, this would be the URL returned from your file storage service
      onUpload(`https://example.com/files/${file.name}`);
    }, 1500);
  };

  return (
    <div className='space-y-2'>
      <div className='flex items-center gap-2'>
        <Input
          type='file'
          id='file-upload'
          className='hidden'
          onChange={handleFileChange}
          accept='.pdf,.doc,.docx'
        />
        <label htmlFor='file-upload'>
          <Button
            type='button'
            variant='outline'
            className='cursor-pointer'
            disabled={isUploading}
            asChild
          >
            <span>
              <Upload className='mr-2 h-4 w-4' />
              {isUploading ? 'Uploading...' : 'Upload File'}
            </span>
          </Button>
        </label>
        {fileName && (
          <div className='flex items-center text-sm text-gray-500'>
            <FileText className='mr-1 h-4 w-4' />
            <span>{fileName}</span>
          </div>
        )}
      </div>
    </div>
  );
}
