<<<<<<< HEAD
body{
  margin:0;
  font-family:Arial, Helvetica, sans-serif;
  background:linear-gradient(180deg,#0f2c2f,#052325);
  color:white;
}

.page{
  padding:20px;
}

.event-header{
  display:flex;
  gap:12px;
  align-items:flex-start;
  margin-bottom:15px;
}

.back{
  text-decoration:none;
  color:white;
  font-size:20px;
  margin-top:4px;
}

.event-header h1{
  font-size:16px;
  margin:0 0 4px 0;
}

.event-header p{
  font-size:12px;
  margin:0;
  opacity:0.8;
}

.event-header span{
  font-size:12px;
  opacity:0.7;
}

.ticketmaster-img img{
  width:100%;
  border-radius:3px;
  display:block;
}

.progress-container{
  height:4px;
  background:#6a868a;
  position:relative;
  overflow:hidden;
}

.progress-bar{
  position:absolute;
  inset:0;
  background:#03ddd2;
  animation:wipe 20s linear infinite;
}

@keyframes wipe{
  from{
    clip-path: inset(0 0 0 0);
  }
  to{
    clip-path: inset(0 100% 0 0);
  }
}

.ticket-card{
  background:#f2f2f2;
  color:#000;
  border-radius:3px;
  padding:18px;
}

.top-card{
  margin-top:2px; /* praticamente colado */
}

.info-card{
  margin-top:2px;
}

.ticket-top{
  display:flex;
  align-items:flex-start;
  gap:18px;
}

.qr-area{
  width:115px;
  flex-shrink:0;
}

.info-row{
  display:flex;
  justify-content:space-between;
  margin-bottom:14px;
}
.info-full{
  margin-bottom:14px;
}
.info-row > div{
  width:48%;
}

.qr-img{
  width:100%;
  display:block;
}

.ticket-side{
  display:flex;
  flex-direction:column;
  padding-top:4px;
}

.mini-label{
  font-size:10px;
  color:#8a8a8a;
  letter-spacing:0.5px;
  display:block;
  margin-bottom:4px;
}

.sector-name{
  font-size:16px;
  font-weight:600;
  margin-bottom:12px;
}

.more-info-btn{
  background:#00c4f525;
  color:#067d8d;
  border:none;
  padding:8px 18px;
  font-size:13px;
  font-weight:500;
  border-radius:6px;
  width:max-content;
}

.info-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px 30px;
}

.info-value{
  font-size:15px;
  font-weight:600;
  display:block;
}
/* ===== CARROSSEL ===== */

.carousel{
  overflow:hidden;
  width:100%;
}

.carousel-track{
  display:flex;
  gap:0;
  transition:transform 0.4s ease;
}

.ticket-wrapper{
  min-width:100%;
  box-sizing:border-box;
}

/* Remove qualquer scrollbar global */
body{
  overflow:hidden;
}

.carousel::-webkit-scrollbar{
  display:none;
=======
body{
  margin:0;
  font-family:Arial, Helvetica, sans-serif;
  background:linear-gradient(180deg,#0f2c2f,#052325);
  color:white;
}

.page{
  padding:20px;
}

.event-header{
  display:flex;
  gap:12px;
  align-items:flex-start;
  margin-bottom:15px;
}

.back{
  text-decoration:none;
  color:white;
  font-size:20px;
  margin-top:4px;
}

.event-header h1{
  font-size:16px;
  margin:0 0 4px 0;
}

.event-header p{
  font-size:12px;
  margin:0;
  opacity:0.8;
}

.event-header span{
  font-size:12px;
  opacity:0.7;
}

.ticketmaster-img img{
  width:100%;
  border-radius:3px;
  display:block;
}

.progress-container{
  height:4px;
  background:#6a868a;
  position:relative;
  overflow:hidden;
}

.progress-bar{
  position:absolute;
  inset:0;
  background:#03ddd2;
  animation:wipe 20s linear infinite;
}

@keyframes wipe{
  from{
    clip-path: inset(0 0 0 0);
  }
  to{
    clip-path: inset(0 100% 0 0);
  }
}

.ticket-card{
  background:#f2f2f2;
  color:#000;
  border-radius:3px;
  padding:18px;
}

.top-card{
  margin-top:2px; /* praticamente colado */
}

.info-card{
  margin-top:2px;
}

.ticket-top{
  display:flex;
  align-items:flex-start;
  gap:18px;
}

.qr-area{
  width:115px;
  flex-shrink:0;
}

.info-row{
  display:flex;
  justify-content:space-between;
  margin-bottom:14px;
}
.info-full{
  margin-bottom:14px;
}
.info-row > div{
  width:48%;
}

.qr-img{
  width:100%;
  display:block;
}

.ticket-side{
  display:flex;
  flex-direction:column;
  padding-top:4px;
}

.mini-label{
  font-size:10px;
  color:#8a8a8a;
  letter-spacing:0.5px;
  display:block;
  margin-bottom:4px;
}

.sector-name{
  font-size:16px;
  font-weight:600;
  margin-bottom:12px;
}

.more-info-btn{
  background:#00c4f525;
  color:#067d8d;
  border:none;
  padding:8px 18px;
  font-size:13px;
  font-weight:500;
  border-radius:6px;
  width:max-content;
}

.info-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px 30px;
}

.info-value{
  font-size:15px;
  font-weight:600;
  display:block;
}
/* ===== CARROSSEL ===== */

.carousel{
  overflow:hidden;
  width:100%;
}

.carousel-track{
  display:flex;
  gap:0;
  transition:transform 0.4s ease;
}

.ticket-wrapper{
  min-width:100%;
  box-sizing:border-box;
}

/* Remove qualquer scrollbar global */
body{
  overflow:hidden;
}

.carousel::-webkit-scrollbar{
  display:none;
>>>>>>> bec3f8af95400c99d783aa7b774f9089d5e4eeac
}