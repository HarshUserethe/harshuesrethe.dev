import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Grid, 
  Box,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import { LuTrash2, LuMail, LuCalendar, LuMessageSquare, LuUser, LuX } from 'react-icons/lu';
import '../../assets/styles/dashboard-styles/DirectContact.css';

const DirectContact = ({ contacts, onDelete }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
  };

  const handleViewMore = (contact) => {
    setSelectedContact(contact);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedContact(null);
  };

  const handleDeleteFromDialog = (id) => {
    onDelete(id);
    handleCloseDialog();
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Sort by latest first
  const sortedContacts = [...contacts].sort((a, b) => 
    new Date(b.creation_date) - new Date(a.creation_date)
  );

  return (
    <div className="direct-contact-container">
      <div className="page-header">
        <div className="page-header-content">
          <div className="page-header-icon-wrapper">
            <LuMail className="page-header-icon" size={28} />
          </div>
          <div>
            <h1 className="page-title">Direct Contact</h1>
            <p className="page-subtitle">Manage your casual contact form submissions</p>
          </div>
        </div>
        <Chip 
          label={`${sortedContacts.length} Total`} 
          className="contact-count-chip"
        />
      </div>

      <Grid container spacing={2.5}>
        {sortedContacts.length === 0 ? (
          <Grid item xs={12}>
            <div className="empty-state">
              <div className="empty-state-icon-wrapper">
                <LuMail size={48} className="empty-state-icon" />
              </div>
              <h3 className="empty-state-title">No messages yet</h3>
              <p className="empty-state-text">Direct contact submissions will appear here</p>
            </div>
          </Grid>
        ) : (
          sortedContacts.map((contact) => (
            <Grid item xs={12} sm={6} lg={4} md={6} key={contact.id}>
              <Card className="contact-card">
                <CardContent className="contact-card-content">
                  {/* Header Section */}
                  <div className="contact-card-header">
                    <div className="contact-avatar-section">
                      <div className="contact-avatar">
                        <LuUser size={20} />
                      </div>
                      <div className="contact-basic-info">
                        <Typography className="contact-name" title={contact.name}>
                          {truncateText(contact.name, 20)}
                        </Typography>
                        <div className="contact-email" title={contact.email}>
                          <LuMail size={12} />
                          <span>{truncateText(contact.email, 25)}</span>
                        </div>
                      </div>
                    </div>
                    <IconButton
                      size="small"
                      className="card-delete-btn"
                      onClick={() => onDelete(contact.id)}
                      title="Delete"
                    >
                      <LuTrash2 size={16} />
                    </IconButton>
                  </div>

                  {/* Message Preview Section */}
                  <div className="contact-message-section">
                    <div className="message-label">
                      <LuMessageSquare size={14} />
                      <span>Message</span>
                    </div>
                    <Typography className="contact-message-preview">
                      {truncateText(contact.message, 120)}
                    </Typography>
                    {contact.message.length > 120 && (
                      <Button
                        size="small"
                        className="view-more-btn"
                        onClick={() => handleViewMore(contact)}
                      >
                        View More
                      </Button>
                    )}
                  </div>

                  {/* Footer Section */}
                  <div className="contact-card-footer">
                    <div className="contact-date-badge">
                      <LuCalendar size={12} />
                      <span>{formatDate(contact.creation_date)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {/* View Full Message Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        className="contact-detail-dialog"
      >
        {selectedContact && (
          <>
            <DialogTitle className="dialog-title">
              <div className="dialog-title-content">
                <div className="dialog-avatar">
                  <LuUser size={24} />
                </div>
                <div className="dialog-header-info">
                  <Typography variant="h6" className="dialog-contact-name">
                    {selectedContact.name}
                  </Typography>
                  <div className="dialog-contact-email">
                    <LuMail size={14} />
                    <span>{selectedContact.email}</span>
                  </div>
                </div>
              </div>
              <IconButton
                onClick={handleCloseDialog}
                className="dialog-close-btn"
                size="small"
              >
                <LuX size={20} />
              </IconButton>
            </DialogTitle>

            <DialogContent className="dialog-content">
              <div className="dialog-section">
                <div className="dialog-section-header">
                  <LuMessageSquare size={18} />
                  <Typography variant="subtitle2" className="dialog-section-title">
                    Full Message
                  </Typography>
                </div>
                <Typography className="dialog-message-text">
                  {selectedContact.message}
                </Typography>
              </div>

              <div className="dialog-meta-info">
                <div className="dialog-meta-item">
                  <LuCalendar size={14} />
                  <span className="meta-label">Received:</span>
                  <span className="meta-value">{formatDate(selectedContact.creation_date)}</span>
                </div>
              </div>
            </DialogContent>

            <DialogActions className="dialog-actions">
              <Button
                variant="outlined"
                className="dialog-delete-btn"
                startIcon={<LuTrash2 size={16} />}
                onClick={() => handleDeleteFromDialog(selectedContact.id)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                className="dialog-close-action-btn"
                onClick={handleCloseDialog}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default DirectContact;