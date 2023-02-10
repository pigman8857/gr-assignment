CREATE TYPE ScanStatus AS ENUM ('Queued', 'In Progress', 'Success', 'Failure');

CREATE TABLE IF NOT EXISTS scanEvent (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  repsository_name VARCHAR,
  scan_status ScanStatus,
  created_by VARCHAR,
  updated_by VARCHAR,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

