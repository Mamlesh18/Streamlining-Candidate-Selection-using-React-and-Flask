import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <button type="submit">Upload File</button>
    </form>
  );
};

export default FileUpload;

// import React, { useState } from 'react';
// import axios from 'axios';

// function FileUpload() {
//   const [file, setFile] = useState(null);
//   const [fileId, setFileId] = useState('');
//   const [downloadFileId, setDownloadFileId] = useState('');

//   const onFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const uploadFile = async () => {
//     if (!file) return;
//     const formData = new FormData();
//     formData.append('file', file);
//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       setFileId(response.data.file_id);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   const downloadFile = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/download/${downloadFileId}`, {
//         responseType: 'blob', // Important to handle binary data
//       });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'filename'); // Default filename; you can update this
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error('Error downloading file:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>File Upload and Download</h1>
//       <input type="file" onChange={onFileChange} />
//       <button onClick={uploadFile}>Upload File</button>
//       {fileId && <p>File uploaded with ID: {fileId}</p>}
      
//       <input
//         type="text"
//         placeholder="Enter file ID to download"
//         value={downloadFileId}
//         onChange={(e) => setDownloadFileId(e.target.value)}
//       />
//       <button onClick={downloadFile}>Download File</button>
//     </div>
//   );
// }

// export default FileUpload;
