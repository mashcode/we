# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_uscon_session',
  :secret      => '578d046cbea035f838e0c8b46b9eafa230539c20c006c30c1c3770b9b1964486ffdb2e3e44ba51bd0670dd82dc620cd85ce89dd6d5e82371f725e22a059e2023'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
