INSERT INTO levels
(description)
VALUES
('Beginner'), ('Intermediate'), ('Competitive');

INSERT INTO users
(level_id, email, password, username, address, can_coach, court_access)
VALUES
('1', 'martina@tennis.co', 'martina1', 'martina', '79 Anson Road', false, false),
('1', 'nick@gmail.com', 'nick1', 'nick', '9 Science Centre Road', false, true),
('2', 'novak@aol.com','novak1','nole_djoker', '52 Stadium Rd', true, false),
('2', 'serena@gmail.com','serena1','serenaW', '385 Beach Rd', false, true),
('3', 'rafa@gmail.com','rafa1','spanish_bull', '2 Telok Blangah Way', true, true),
('3', 'roger@yahoo.com','roger1','kiss_my_ace', '6 Raffles Blvd', false, true),
('1', 'ana@tennis.co','ana1','ana', '57 Rutland Rd', false, true),
('1', 'coco@aol.com','coco1','cool_coco', '3000 Ang Mo Kio Ave 8', false, true),
('2', 'naomi@ao.sg','naomi1','naomi', '3 St Wilfred Rd', false, true),
('2', 'boris@gmail.co','boris1','legendz', '130E Harding Rd', false, false),
('3', 'john@yahoo.sg','john1','john_d_man', '1 Rutland Rd', false, true),
('3', 'stefanos@.gmail.com','stefanos1','greek_god', '34 Neil Road', true, true);

INSERT INTO categories
(type)
VALUES
('Rally'), ('Singles'),('Doubles'), ('Training');


INSERT INTO activities
(user_id, category_id, title, description, activity_date, start_at, end_at, address, slots)
VALUES
(1, 1, 'social rally', 'Just looking for willing hitting partners.', '2020-03-21', '07:00:00', '09:00:00', '57 Rutland Rd, Singapore 218255', 1 ),
(5, 4, 'looking for students!', 'Want to learn tennis or just brush up on your technique? Hit me up for a training session. Players of all levels are welcome!', '2020-03-15', '18:30:00', '20:30:00', ' 8 Stadium Blvd, Singapore 397804', 6 ),
(6, 3, 'doubles match for intermediate to advance players', 'Doubles or mixed doubles game open to intermediate or competitive players only please.', '2020-03-14', '09:00:00', '10:30:00' , '12A Winchester Road, Singapore 117786', 3),
(3, 2, 'singles practice match', 'I want to practice my singles game. Who wants to play?', '2020-04-01', '10:00:00', '11:00:00', '3000 Ang Mo Kio Ave 8, Singapore 569813', 1),
(10, 1, 'serve and rally', 'I want to practice my consistency. Please join if you want a casual rally session. Any skill level welcome.', '2020-03-15', '17:00:00', '18:00:00', '21 Evans Rd, Singapore 259366', 3),
(8, 2, 'practice game', 'Need to practice playing a game. Anyone willing to play with a beginner?', '2020-03-28', '18:15:00', '19:15:00', '3 Bedok North Street 2, 469643', 1);

INSERT INTO activities_users
(user_id, isHost, activity_id)
VALUES
(1,true,1), (5,true, 2),(6,true,3),(3,true,4), (10,true,5),(8,true,6);
