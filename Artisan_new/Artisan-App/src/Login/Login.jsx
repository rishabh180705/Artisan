import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Ensure i18n configuration is imported
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const { t, i18n } = useTranslation();
  const [phachanId, setPhachanId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const fetchDetailsFromPhachanId = async () => {
    if (!phachanId.trim()) {
      speak(t('enter_phachan_id'));
      alert(t('enter_phachan_id'));
      return;
    }

    setLoading(true);
    try {
      console.log('Fetching details for Phachan ID:', phachanId);
      const fetchedPhoneNumber = '9876543210'; // Example phone number
      const fetchedUserName = 'Rakesh Kumar'; // Example user name

      setPhoneNumber(fetchedPhoneNumber);
      setUserName(fetchedUserName);
      speak(`${t('welcome')}, ${fetchedUserName}!`);
      alert(`${t('welcome')}, ${fetchedUserName}!`);
    } catch (error) {
      speak(t('failed_to_fetch'));
      alert(t('failed_to_fetch'));
    } finally {
      setLoading(false);
    }
  };

  const sendOTP = async () => {
    if (!phoneNumber) {
      speak(t('no_phone_number'));
      alert(t('no_phone_number'));
      return;
    }

    setLoading(true);
    try {
      console.log('OTP sent to', phoneNumber);
      speak(t('otp_sent_message'));
      alert(t('otp_sent_message'));
      setIsOtpSent(true);
    } catch (error) {
      speak(t('otp_failed'));
      alert(t('otp_failed'));
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = () => {
    if (otp === '123456') {
      setOtpVerified(true);
      speak(t('otp_verified'));
      alert(t('otp_verified'));
    } else {
      speak(t('invalid_otp'));
      alert(t('invalid_otp'));
    }
  };

  const handleLogin = () => {
    if (!otpVerified) {
      speak(t('verify_phone_first'));
      alert(t('verify_phone_first'));
      return;
    }

    speak(`${t('welcome')}, ${userName}!`);
    alert(`${t('welcome')}, ${userName}!`);
    navigate("/Artisan-Home"); // Simulating navigation to the app page
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = i18n.language;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div style={styles.container}>
      {/* Language Selector */}
      <div style={styles.languageSelector}>
        <label style={styles.languageLabel}>{t('select_language')}:</label>
        <select
          value={selectedLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
          style={styles.select}
          onFocus={() => speak(t('select_language'))}
        >
          <option value="en">English</option>
          <option value="ta">தமிழ்</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>

      <h1 style={styles.title}>{userName ? `${t('welcome')}, ${userName}` : t('login')}</h1>
      <p style={styles.subtitle} onFocus={() => speak(t('enter_phachan_to_login'))}>
        {!userName ? t('enter_phachan_to_login') : t('proceed_to_verify_otp')}
      </p>

      {/* Phachan ID Input */}
      {!userName && (
        <div style={styles.row}>
          <input
            style={{ ...styles.input, ...(phoneNumber && styles.disabledInput) }}
            placeholder={t('phachan_id_placeholder')}
            value={phachanId}
            onChange={(e) => setPhachanId(e.target.value)}
            disabled={!!phoneNumber}
            onFocus={() => speak(t('phachan_id_placeholder'))}
          />
          {!phoneNumber && (
            <button
              style={styles.button}
              onClick={fetchDetailsFromPhachanId}
              disabled={loading}
              onFocus={() => speak(t('verify_id'))}
            >
              {loading ? t('loading') : t('verify_id')}
            </button>
          )}
        </div>
      )}

      {/* Phone Number Display */}
      {phoneNumber && !isOtpSent && (
        <div style={styles.row}>
          <input
            style={{ ...styles.input, ...styles.disabledInput }}
            value={phoneNumber}
            disabled
            onFocus={() => speak(phoneNumber)}
          />
          <button
            style={styles.button}
            onClick={sendOTP}
            disabled={loading}
            onFocus={() => speak(t('send_otp'))}
          >
            {loading ? t('loading') : t('send_otp')}
          </button>
        </div>
      )}

      {/* OTP Input */}
      {isOtpSent && !otpVerified && (
        <div style={styles.row}>
          <input
            style={styles.input}
            placeholder={t('enter_otp')}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            onFocus={() => speak(t('enter_otp'))}
          />
          <button
            style={styles.button}
            onClick={verifyOTP}
            onFocus={() => speak(t('verify_otp'))}
          >
            {t('verify_otp')}
          </button>
        </div>
      )}

      {/* Login Button */}
      {otpVerified && (
        <button
          style={styles.loginButton}
          onClick={handleLogin}
          onFocus={() => speak(t('login'))}
        >
          {t('login')}
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '16px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  languageSelector: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  languageLabel: {
    marginRight: '10px',
    fontSize: '16px',
  },
  select: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: '20px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  input: {
    flex: '1',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '8px',
  },
  disabledInput: {
    backgroundColor: '#f2f2f2',
  },
  button: {
    padding: '10px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  loginButton: {
    padding: '12px 24px',
    backgroundColor: '#6f42c1',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '0 auto',
    display: 'block',
  },
};

export default LoginScreen;
