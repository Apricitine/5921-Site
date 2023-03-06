---
title: Our Programs
author: Leo
---

# **Our Programs**
##### *Written by: Leo*

We have several programs with different features. Most of them are in Teamcode/src/main/java/org/firstinspires/ftc/teamcode. If a filepath is referred to, assume it's from teamcode with a lowercase t. From there, the auto and teleop folders are pretty self-explanatory, common is for files and classes used by both teleop and auto programs (such as the top limit of the lift), examples contains interesting examples that came with the FTC SDK, and roadrunner has stuff for roadrunner, a library that allows more complicated movement.

## General Utility Programs
Our programs use a camera, EasyOpenCV, and OpenCV for object detection and AprilTag recognition. They also obviously use motors, which are defined and initialised in common/HardwareDrive.java. (We should probably initialise servos and cameras in HardwareDrive too, but we don't. In fact, all our code is very messy. We'll try to clean it up.)

In HardwareDrive, we define motors and initialise them from a hardware map. This is basically a thing that contains all of our actual motors. The names and corresponding motors in the hardware map are defined in a configuration, which is set up on the Driver Station or equivalent device.

We process images for AprilTag recognition and pole recognition. This is done via EasyOpenCV and OpenCV. EasyOpenCV is a library that gets images from a camera and streams them to a pipeline, which is what actually processes and finds things out from images. Our main pipelines are auto/BasicPipeline.java and auto/AprilTagDetectionPipeline.java. BasicPipeline takes an image and finds the location of the nearest pole so that we can reliably drop cones on it, and AprilTagDetectionPipeline finds the ID of an AprilTag so that we know where to park for extra points. If you want more info on how to use these systems, EasyOpenCV has great documentation on their Github page, and there are lots of great tutorials for OpenCV online.

The last utility program we use is constants. This has several nicely labeled constants, and we use it so that we don't have to change a whole bunch of values in a whole bunch of different programs.

## Auto Programs
Our main auto scripts are in auto/ and will probably have "aTagAuto" in their names. (Also check whichever ones were most recently edited.)

They start by initializing different parts of the robot, including the motors via HardwareDrive, the claw servo, and the camera. Then, they tell EasyOpenCV to start supplying images to the AprilTagDetectionPipeline with <?prettify?>```camera.setPipeline```. At this point, it is important to note that an FTC program has 2 stages: The init stage and the main script. After the drivers select a program, they must press an "init" button. This makes the program execute all steps up to either a <?prettify?>```waitForStart()``` function or a <?prettify?>```while (!isStarted() && !isStopRequested())``` loop. If there's a while-loop, it runs until the drivers press a "start" button, which appears after the "init" button is pressed. In our case, the while-loop continously saves info about the latest AprilTag detected and updates the driver's screen.

After the "start" button is pressed, the robot starts supplying images to BasicPipeline to detect poles. It then navigates to a pole, starts taking pictures and passes them to a BasicPipeline. We use accessor methods to get the location of the pole from BasicPipeline, and adjust accordingly. (The reason we take so many pictures is to let the camera adjust to the lighting.) The robot then drives to a cone stack, picks up a cone, drives to a pole, and adjusts its position again. This is repeated as many times as possible. After we're done putting cones on poles, we park according to the saved AprilTag's ID.

## Teleop Programs
Our main Teleop program is teleop/BaseDriveComplete. It initalises the robot then drives it according what the drivers do with their controllers. By the time you're reading this, it might also use a BasicPipeline to automatically aim for a pole. BaseDriveGyro is pretty much the same thing except it uses the Control Hub's onboard gyro to report its orientation. We use it as a backup auto. BaseDriveTests is where we test new features for teleop. For now, it includes a toggle-based lift that uses pretty simple logic. We might add field-centric drive and/or auto-aim using BasicPipeline.

## Extra Notes
We have a lot of unused programs and general junk as of 2/11/23. We'll try to get rid of it. If anything here is outdated, please tell Luke or Leo. The latter can't stand outdated info, and will be happy to update it. If you have any questions, don't hesitate to ask someone. Luke and Leo are/were the main programmers in 5921 for the 2022-23 season, but pretty much everyone should be able to help.