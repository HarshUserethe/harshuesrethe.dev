import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Select,
  MenuItem,
  FormControl,
  Chip,
  Modal,
  IconButton,
} from '@mui/material';
import {
  LuTrash2,
  LuEye,
  LuBriefcase,
  LuCalendar,
  LuBuilding2,
  LuDollarSign,
  LuClock,
  LuFileText,
  LuMail,
  LuUser,
  LuX,
  LuChevronDown,
} from 'react-icons/lu';
import '../../assets/styles/dashboard-styles/ProjectQuery.css';

const ProjectQuery = ({ queries = [], onDelete, onUpdateStatus }) => {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const handleViewClick = (query) => {
    setSelectedQuery(query);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedQuery(null);
  };

  const handleStatusChange = (id, newStatus) => {
    onUpdateStatus(id, newStatus);
    if (selectedQuery && selectedQuery._id === id) {
      setSelectedQuery({ ...selectedQuery, status: newStatus });
    }
  };

  const handleDeleteFromModal = (id) => {
    onDelete(id);
    handleCloseModal();
  };

  const getStatusColor = (status) => {
    const colors = {
      new: '#3b82f6',
      priority: '#ef4444',
      ignored: '#9ca3af',
      done: '#10b981',
      'in progress': '#f59e0b',
    };
    return colors[status] || '#3b82f6';
  };

  const getStatusBgColor = (status) => {
    const colors = {
      new: 'rgba(59, 130, 246, 0.1)',
      priority: 'rgba(239, 68, 68, 0.1)',
      ignored: 'rgba(156, 163, 175, 0.1)',
      done: 'rgba(16, 185, 129, 0.1)',
      'in progress': 'rgba(245, 158, 14, 0.1)',
    };
    return colors[status] || 'rgba(59, 130, 246, 0.1)';
  };

  // Sort by latest first
  const sortedQueries = [...queries].sort(
    (a, b) => b._creationTime - a._creationTime
  );

  return (
    <div className="project-query-container">
      <div className="page-header">
        <div className="page-header-content sm-header-content">
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <div className="page-header-icon-wrapper">
              <LuBriefcase className="page-header-icon" size={20} />
            </div>
            <div>
              <h1 className="page-title">Project Queries</h1>
              <p className="page-subtitle">
                Manage your smart contact form submissions
              </p>
            </div>
          </Box>
          <Chip
            label={`${sortedQueries.length} Total`}
            className="contact-count-chip"
          />
        </div>
      </div>

      <div className="queries-grid">
        {sortedQueries.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon-wrapper">
              <LuBriefcase size={40} className="empty-state-icon" />
            </div>
            <h3 className="empty-state-title">No project queries</h3>
            <p className="empty-state-text">Submissions will appear here</p>
          </div>
        ) : (
          sortedQueries.map((query) => (
            <Card className="project-card" key={query._id}>
              <CardContent className="project-card-content">
                {/* Header Row */}
                <div className="card-header">
                  <div className="card-header-left">
                    <div className="contact-avatar">
                      <LuUser size={20} />
                    </div>
                    <div>
                      <h3 className="client-name">
                        {query.client_info?.fullname}
                      </h3>
                      <span className="client-email">
                        {query.client_info?.email}
                      </span>
                    </div>
                  </div>
                  <div className="card-header-right">
                    <FormControl className="status-dropdown" size="small">
                      <Select
                        value={query.status}
                        onChange={(e) =>
                          handleStatusChange(query._id, e.target.value)
                        }
                        className="status-select"
                        IconComponent={LuChevronDown}
                      >
                        <MenuItem value="new">New</MenuItem>
                        <MenuItem value="priority">Priority</MenuItem>
                        <MenuItem value="in progress">In Progress</MenuItem>
                        <MenuItem value="done">Done</MenuItem>
                        <MenuItem value="ignored">Ignored</MenuItem>
                      </Select>
                    </FormControl>
                    <Chip
                      label={query.status}
                      className="status-badge"
                      style={{
                        backgroundColor: getStatusBgColor(query.status),
                        color: getStatusColor(query.status),
                      }}
                    />
                  </div>
                </div>

                {/* Info Grid */}
                <div className="card-info-grid">
                  <div className="info-item">
                    <LuFileText size={14} className="info-icon" />
                    <span className="info-label">Type:</span>
                    <span className="info-value">{query.prj_type}</span>
                  </div>
                  <div className="info-item">
                    <LuDollarSign size={14} className="info-icon" />
                    <span className="info-label">Budget:</span>
                    <span className="info-value">{query.budget}</span>
                  </div>
                  <div className="info-item">
                    <LuClock size={14} className="info-icon" />
                    <span className="info-label">Timeline:</span>
                    <span className="info-value">{query.timeline}</span>
                  </div>
                  <div className="info-item">
                    <LuCalendar size={14} className="info-icon" />
                    <span className="info-label">Submitted:</span>
                    <span className="info-value">
                      {formatDate(query._creationTime)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="card-description">
                  <LuMail className="info-icon" size={14} />
                  <p className="description-text">
                    {query.client_info.prj_description?.length > 120
                      ? `${query.client_info.prj_description.substring(0, 120)}...`
                      : query.client_info.prj_description}
                  </p>
                </div>

                {/* Actions */}
                <div className="card-actions">
                  <Button
                    variant="outlined"
                    size="small"
                    className="btn-view"
                    startIcon={<LuEye size={14} />}
                    onClick={() => handleViewClick(query)}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    className="btn-delete"
                    startIcon={<LuTrash2 size={14} />}
                    onClick={() => onDelete(query._id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Detail Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        className="project-modal"
      >
        <div className="modal-wrapper">
          {selectedQuery && (
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <div>
                  <h2 className="modal-title">Project Details</h2>
                  <p className="modal-subtitle">
                    Complete submission information
                  </p>
                </div>
                <IconButton
                  className="modal-close-btn"
                  onClick={handleCloseModal}
                >
                  <LuX size={20} />
                </IconButton>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                {/* Client Information */}
                <div className="modal-section">
                  <div className="section-header">
                    <LuUser size={16} />
                    <h3 className="section-title">Client Information</h3>
                  </div>
                  <div className="section-grid">
                    <div className="field-item">
                      <span className="field-label">Name</span>
                      <span className="field-value">
                        {selectedQuery.client_info.fullname}
                      </span>
                    </div>
                    <div className="field-item">
                      <span className="field-label">Email</span>
                      <span className="field-value">
                        {selectedQuery.client_info.email}
                      </span>
                    </div>
                    <div className="field-item">
                      <span className="field-label">Project Title</span>
                      <span className="field-value">
                        {selectedQuery.client_info.prj_title}
                      </span>
                    </div>
                    <div className="field-item">
                      <span className="field-label">Submitted</span>
                      <span className="field-value">
                        {formatDate(selectedQuery._creationTime)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="modal-section">
                  <div className="section-header">
                    <LuBriefcase size={16} />
                    <h3 className="section-title">Project Information</h3>
                  </div>
                  <div className="section-grid">
                    <div className="field-item">
                      <span className="field-label">Project Type</span>
                      <span className="field-value">
                        {selectedQuery.prj_type}
                      </span>
                    </div>
                    <div className="field-item">
                      <span className="field-label">Budget</span>
                      <span className="field-value">
                        {selectedQuery.budget}
                      </span>
                    </div>
                    <div className="field-item">
                      <span className="field-label">Timeline</span>
                      <span className="field-value">
                        {selectedQuery.timeline}
                      </span>
                    </div>
                    <div className="field-item">
                      <span className="field-label">Status</span>
                      <FormControl
                        size="small"
                        fullWidth
                        className="modal-status-control"
                      >
                        <Select
                          value={selectedQuery.status}
                          onChange={(e) =>
                            handleStatusChange(
                              selectedQuery._id,
                              e.target.value
                            )
                          }
                          className="modal-status-select"
                          IconComponent={LuChevronDown}
                        >
                          <MenuItem value="new">New</MenuItem>
                          <MenuItem value="priority">Priority</MenuItem>
                          <MenuItem value="in progress">In Progress</MenuItem>
                          <MenuItem value="done">Done</MenuItem>
                          <MenuItem value="ignored">Ignored</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="modal-section">
                  <div className="section-header">
                    <LuFileText size={16} />
                    <h3 className="section-title">Project Description</h3>
                  </div>
                  <div className="description-box">
                    <p>{selectedQuery.client_info.prj_description}</p>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="modal-section">
                  <div className="section-header">
                    <LuFileText size={16} />
                    <h3 className="section-title">Attachments</h3>
                  </div>
                  <div className="description-box">
                    {selectedQuery.attachments?.length > 0 ? (
                      selectedQuery.attachments.map((file, index) => (
                        <div key={index} style={{ marginBottom: '8px' }}>
                          <a
                            href={file.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {file.file_name}
                          </a>
                        </div>
                      ))
                    ) : (
                      <p>No attachments</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <Button
                  variant="text"
                  size="small"
                  className="modal-btn-delete"
                  startIcon={<LuTrash2 size={14} />}
                  onClick={() => handleDeleteFromModal(selectedQuery._id)}
                >
                  Delete Project
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  className="modal-btn-close"
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ProjectQuery;
