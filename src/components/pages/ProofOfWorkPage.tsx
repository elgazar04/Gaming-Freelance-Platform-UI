import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { GlowButton } from '../GlowButton';
import { Upload, FileImage, FileVideo, File, CheckCircle, XCircle } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

interface ProofOfWorkPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function ProofOfWorkPage({ currentPage, onNavigate }: ProofOfWorkPageProps) {
  const [dragActive, setDragActive] = useState(false);

  const activeJobs = [
    {
      id: 1,
      title: 'League of Legends Rank Boost',
      client: 'Client_Alex',
      deadline: '2 days left',
      status: 'in-progress',
      proofSubmitted: false
    },
    {
      id: 2,
      title: 'Valorant Coaching Session',
      client: 'Client_Sarah',
      deadline: '5 days left',
      status: 'in-progress',
      proofSubmitted: false
    },
  ];

  const submittedProofs = [
    {
      id: 3,
      title: 'CS:GO Rank Boost to Global',
      client: 'Client_Mike',
      submittedDate: '1 day ago',
      status: 'approved',
      files: ['screenshot1.png', 'screenshot2.png']
    },
    {
      id: 4,
      title: 'Apex Legends Coaching',
      client: 'Client_Emma',
      submittedDate: '3 days ago',
      status: 'pending',
      files: ['video_proof.mp4']
    },
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar onNavigate={onNavigate} />
      
      <div className="flex min-h-screen" style={{ marginTop: '80px' }}>
        <Sidebar userRole="gamer" currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="flex-1">
        {/* Header */}
        <div className="bg-[#121212] border-b border-[#333] px-8 py-6">
          <h2 className="mb-2">Proof of Work</h2>
          <p className="text-[#A0A0A0]">Upload proof of completion for your active jobs</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Active Jobs Requiring Proof */}
          <div className="mb-8">
            <h4 className="mb-6">Active Jobs</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeJobs.map((job) => (
                <div key={job.id} className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h5 className="mb-2">{job.title}</h5>
                      <p className="text-sm text-[#A0A0A0]">Client: {job.client}</p>
                    </div>
                    <span className="px-3 py-1 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-[#3B82F6] text-sm">
                      {job.deadline}
                    </span>
                  </div>

                  {/* Upload Area */}
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                      dragActive
                        ? 'border-[#00FF9D] bg-[#00FF9D]/5'
                        : 'border-[#333] hover:border-[#00FF9D]/50'
                    }`}
                  >
                    <Upload size={48} className="mx-auto mb-4 text-[#A0A0A0]" />
                    <p className="mb-2">Drag and drop files here</p>
                    <p className="text-sm text-[#A0A0A0] mb-4">or</p>
                    <button className="px-4 py-2 bg-[#1A1A1A] border border-[#00FF9D]/30 rounded-lg text-[#00FF9D] hover:bg-[#00FF9D]/10 transition-all">
                      Browse Files
                    </button>
                    <p className="text-xs text-[#A0A0A0] mt-4">
                      Supported: Images, Videos, PDFs (Max 50MB)
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mt-4">
                    <Label htmlFor={`description-${job.id}`}>Description</Label>
                    <Textarea
                      id={`description-${job.id}`}
                      placeholder="Describe the work completed..."
                      className="bg-[#121212] border-[#333] mt-2 min-h-24"
                    />
                  </div>

                  <GlowButton className="w-full mt-4">
                    Submit Proof
                  </GlowButton>
                </div>
              ))}
            </div>
          </div>

          {/* Submitted Proofs */}
          <div>
            <h4 className="mb-6">Submitted Proofs</h4>
            <div className="space-y-4">
              {submittedProofs.map((proof) => (
                <div key={proof.id} className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h5>{proof.title}</h5>
                        {proof.status === 'approved' ? (
                          <span className="flex items-center gap-1 px-3 py-1 bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded-full text-[#00FF9D] text-sm">
                            <CheckCircle size={14} />
                            Approved
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 px-3 py-1 bg-[#7B61FF]/10 border border-[#7B61FF]/30 rounded-full text-[#7B61FF] text-sm">
                            <Clock size={14} />
                            Pending Review
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#A0A0A0]">Client: {proof.client}</p>
                      <p className="text-sm text-[#A0A0A0]">Submitted {proof.submittedDate}</p>
                    </div>
                  </div>

                  {/* Attached Files */}
                  <div className="bg-[#121212] rounded-lg p-4 border border-[#333]">
                    <p className="text-sm text-[#A0A0A0] mb-3">Attached Files:</p>
                    <div className="flex flex-wrap gap-2">
                      {proof.files.map((file, index) => {
                        const isImage = file.endsWith('.png') || file.endsWith('.jpg');
                        const isVideo = file.endsWith('.mp4');
                        
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2 px-3 py-2 bg-[#1A1A1A] border border-[#333] rounded-lg"
                          >
                            {isImage && <FileImage size={16} className="text-[#00FF9D]" />}
                            {isVideo && <FileVideo size={16} className="text-[#7B61FF]" />}
                            {!isImage && !isVideo && <File size={16} className="text-[#3B82F6]" />}
                            <span className="text-sm">{file}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {proof.status === 'approved' && (
                    <div className="mt-4 p-4 bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded-lg">
                      <p className="text-[#00FF9D] text-sm">
                        ✓ This proof has been approved by the client. Payment will be released shortly.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function Clock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
