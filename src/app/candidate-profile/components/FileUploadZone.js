'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';

const FileUploadZone = ({ onFileSelect, label = 'Update your CV', maxFiles = 5, accept = '.pdf,.doc,.docx,.jpg,.png' }) => {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const getIcon = (name) => {
    const ext = name.split('.').pop().toLowerCase();
    if (ext === 'pdf') return { cls: 'pdf', label: 'PDF' };
    if (['doc','docx'].includes(ext)) return { cls: 'doc', label: 'DOC' };
    if (['jpg','jpeg','png','gif'].includes(ext)) return { cls: 'img', label: 'IMG' };
    return { cls: 'other', label: ext.toUpperCase() };
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024*1024) return Math.round(bytes/1024) + ' KB';
    return (bytes/(1024*1024)).toFixed(1) + ' MB';
  };

  const processFile = useCallback((file) => {
    if (files.length >= maxFiles) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const entry = {
        name: file.name,
        size: formatSize(file.size),
        type: file.type,
        status: 'uploaded',
        preview: reader.result,
        file: file
      };
      const newFiles = [...files, entry];
      setFiles(newFiles);
      if (onFileSelect) {
        newFiles.forEach((f) => onFileSelect(f.file, f.preview));
      }
    };
    reader.readAsDataURL(file);
  }, [files.length, maxFiles, files, onFileSelect]);

  const handleFiles = (addedFiles) => {
    Array.from(addedFiles).forEach(processFile);
  };

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
      e.target.value = '';
    }
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  useEffect(() => {
    const el = fileInputRef.current;
    if (el) {
      el.addEventListener('change', handleInputChange);
      return () => el.removeEventListener('change', handleInputChange);
    }
  }, [handleInputChange]);

  return (
    <div className="upload-section">
      <div className="panel">
        <p className="section-title">{label}</p>
        
        <div 
          className={`drop-zone ${dragActive ? 'dragover' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input 
            ref={fileInputRef}
            type="file" 
            multiple 
            accept={accept}
            style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
          />
          <div className="upload-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          </div>
          <p className="drop-text">Drag & drop your files here</p>
          <p className="drop-sub">or click to browse from your computer</p>
          <button className="browse-btn" type="button">Browse files</button>
          <p className="file-types">Supported: PDF, DOC, DOCX, JPG, PNG · Max 10MB per file</p>
        </div>

        <div className="upload-limit">
          <span className="dot"></span>
          <span>{files.length} of {maxFiles} files used</span>
        </div>

        <div className="file-list">
          {files.map((f, i) => {
            const icon = getIcon(f.name);
            return (
              <div key={i} className="file-item">
                <div className={`file-icon ${icon.cls}`}>{icon.label}</div>
                <div className="file-info">
                  <div className="file-name">{f.name}</div>
                  <div className="file-meta">{f.size} · Uploaded</div>
                </div>
                <div className="file-status">
                  <span className="status-badge uploaded">Uploaded</span>
                  <button 
                    className="delete-btn" 
                    type="button"
                    onClick={() => removeFile(i)}
                    title="Remove file"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .upload-section { font-family: 'Segoe UI', system-ui, sans-serif; padding: 1.5rem 0; }
        .panel { background: #fff; border: 0.5px solid #e5e7eb; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.25rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .section-title { font-size: 16px; font-weight: 500; color: #111827; margin: 0 0 1.25rem 0; }
        .drop-zone { border: 1.5px dashed #d1d5db; border-radius: 12px; padding: 2.5rem 1.5rem; text-align: center; cursor: pointer; transition: all 0.2s ease; background: #f9fafb; position: relative; }
        .drop-zone:hover:not(:focus-within), .drop-zone.dragover { border-color: #3B82F6; background: #EFF6FF; }
        .upload-icon { width: 48px; height: 48px; margin: 0 auto 0.75rem; background: #EFF6FF; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .upload-icon svg { width: 22px; height: 22px; color: #3B82F6; }
        .drop-text { font-size: 14px; font-weight: 500; color: #111827; margin: 0 0 4px 0; }
        .drop-sub { font-size: 12px; color: #6b7280; margin: 0 0 1rem 0; }
        .browse-btn { display: inline-block; padding: 6px 18px; background: #3B82F6; color: #fff; border-radius: 6px; font-size: 13px; font-weight: 500; cursor: pointer; transition: background 0.15s; border: none; }
        .browse-btn:hover { background: #2563EB; }
        .file-types { font-size: 11px; color: #9ca3af; margin-top: 0.75rem; margin-bottom: 0; }
        .file-list { margin-top: 1rem; display: flex; flex-direction: column; gap: 8px; }
        .file-item { display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: #fff; border: 0.5px solid #e5e7eb; border-radius: 8px; transition: border-color 0.15s; }
        .file-item:hover { border-color: #d1d5db; }
        .file-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; flex-shrink: 0; }
        .file-icon.pdf { background: #FEE2E2; color: #DC2626; }
        .file-icon.doc { background: #DBEAFE; color: #2563EB; }
        .file-icon.img { background: #D1FAE5; color: #059669; }
        .file-icon.other { background: #F3F4F6; color: #6B7280; }
        .file-info { flex: 1; min-width: 0; }
        .file-name { font-size: 13px; font-weight: 500; color: #111827; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .file-meta { font-size: 11px; color: #6b7280; margin-top: 2px; }
        .file-status { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .status-badge { font-size: 11px; padding: 3px 8px; border-radius: 20px; font-weight: 500; }
        .status-badge.uploaded { background: #D1FAE5; color: #065F46; }
        .status-badge.uploading { background: #DBEAFE; color: #1E40AF; }
        .delete-btn { width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; cursor: pointer; background: transparent; border: 0.5px solid #e5e7eb; transition: all 0.15s; color: #6b7280; }
        .delete-btn:hover { background: #FEE2E2; border-color: #FCA5A5; color: #DC2626; }
        .upload-limit { display: flex; align-items: center; gap: 6px; margin-top: 0.75rem; font-size: 12px; color: #6b7280; }
        .dot { width: 5px; height: 5px; border-radius: 50%; background: #3B82F6; flex-shrink: 0; }
      `}</style>
    </div>
  );
};

export default FileUploadZone;
