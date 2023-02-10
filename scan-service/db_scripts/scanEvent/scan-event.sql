CREATE TYPE ScanStatus AS ENUM ('Queued', 'In Progress', 'Success', 'Failure');

CREATE TABLE IF NOT EXISTS scan_event (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  unique_id UUID,
  repository_name VARCHAR,
  scan_status ScanStatus,
  created_by VARCHAR,
  updated_by VARCHAR,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

