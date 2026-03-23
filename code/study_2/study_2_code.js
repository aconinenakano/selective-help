function generateProtocol(child, pastSessions) {

    return {
        frames: {
            'welcome': {
                'kind': 'exp-lookit-text',
                'blocks': [{'title': 'Welcome to "Let\'s look at block pyramids!"'}, {'text': 'Thank you for your interest in our study!'}, {'text': 'Here\'s a quick summary of what\'s about to happen:'}, {'text': '1. Webcam Setup and Video Consent: First, we\'ll be checking that your webcam is working. Then you and your child will give your consent to participate in this research.'}, {'text': '2. Start the Study: When you click the \'Start the game!\' button, the study will begin! This study will take about 5 minutes in total.'}, {'text': 'Thank you so much for helping us with our science! We hope you and your child have fun.'}],
                'showPreviousButton': false
            },
            'video-config': {
                'kind': 'exp-video-config'
            },
            'video-consent': {
                'kind': 'exp-lookit-video-consent',
                'template': 'consent_005',
                'PIName': 'Aneesa Conine-Nakano',
                'institution': 'Stanford University',
                'PIContact': 'Aneesa Conine-Nakano (aneesacn@stanford.edu) if you have any questions or inquiries about the study.',
                'purpose': 'Children often receive help from the people around them, but we know less about what they learn from these helping behaviors. How do young children use helping interactions to understand others and the tasks they face? This research explores how children learn to decide which tasks to try, assess others\' abilities, and recognize who might need help by observing acts of helping.',
                'risk_statement': 'There are no expected risks if you participate in the study.',
                'voluntary_participation': 'Participation in this study is entirely optional, and you are free to exit at any time.',
                'payment': 'There are no costs to participating. There are also no known risks associated with this study beyond those of everyday life. Although this study will not benefit your child directly, it will add to our understanding of how children think in general. If indicated in the study description, you may be compensated for participating in this study; if this is not stated in the study description, then you will not receive any payment for your participation.',
                'datause': 'The researchers and study staff follow federal and state laws to protect your privacy, so all of your information and research records will be kept confidential. The only exception to these procedures for maintaining confidentiality is that we are required by law to report to the appropriate authorities suspicion of harm to your child or to others. More information on how we keep your videos and data private can be found at lookit.mit.edu/faq.',
                'research_rights_statement': 'The Institutional Review Board (IRB) of Stanford University has approved this research study. If you have questions regarding your rights as a research subject you may contact the IRB office at 650-723-2480, or by mail at Research Compliance Office, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306.'
            },
            'positioning': {
                'kind': 'exp-video-config-quality',
                'title': 'Positioning',
                'introText': 'It\'s time to get your child & check yourself out!',
                'showRecordMenu': false,
                'requireTestVideo': false,
                'completedItemText': 'Got it!',
                'instructionBlocks': [
                    {
                        'text': 'You and your child can sit in any position.',
                        'title': 'Get comfortable'
                    },
                    {
                        'text': 'Go ahead and get settled and use the webcam preview to make sure your child\'s whole face and torso are in view.',
                        'title': 'Take a few moments'
                    },
                    {
                        'text': 'Press the \'Next\' button down below if you and your child are in position and ready to go.',
                        'title': 'When you\'re ready'
                    }
                ],
                'nextButtonText': 'My child and I are in position and ready to start!',
                'showPreviousButton': true,
                'requireItemConfirmation': true,
                'recordingInstructionText': ''
            },
            'start-recording': {
                'kind': 'exp-lookit-start-recording',
                'imageAnimation': 'spin',
                'displayFullscreen': true
            },

            'welcome-block': {
                'kind': 'exp-lookit-video',
                'video': { 'top': 0, 'left': 0, 'width': 100, 'source': 'welcome', 'loop': false },
                'backgroundColor': 'black', 'autoProceed': true, 'doRecording': true,
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main', 'videoTypes': ['mp4']
            },
            'intro-block': {
                'kind': 'exp-lookit-video',
                'video': { 'top': 0, 'left': 0, 'width': 100, 'source': 'SH_study2_intro', 'loop': false },
                'backgroundColor': 'black', 'autoProceed': true, 'doRecording': true,
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main', 'videoTypes': ['mp4']
            },

            'screener-choice': {
                'kind': 'exp-lookit-images-audio',
                'images': [
                    {'id': 'background', 'src': 'SH2_screenerchoice.png', 'left': 0, 'width': 100, 'top': 0, 'height': 100, 'nonChoiceOption': true},
                    {'id': 'left-choice', 'src': 'answer_rect_blank.png', 'left': 10, 'width': 35, 'top': 25, 'height': 50, 'feedbackAudio': 'this_one', 'nonChoiceOption': false},
                    {'id': 'right-choice', 'src': 'answer_rect_blank.png', 'left': 55, 'width': 35, 'top': 25, 'height': 50, 'feedbackAudio': 'this_one', 'nonChoiceOption': false}
                ],
                'audio': 'screener_question', 'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main', 'audioTypes': ['mp3'],
                'autoProceed': false, 'choiceRequired': true, 'doRecording': true
            },
            'screener-feedback': {
                'kind': 'exp-lookit-video',
                'backgroundColor': 'black', 'autoProceed': true, 'doRecording': true,
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main', 'videoTypes': ['mp4'],
                'generateProperties': 'function(expData, sequence) { var choiceFrameId = sequence[sequence.length - 1]; var frameData = expData[choiceFrameId]; var isCorrect = (frameData && frameData.selectedImage === "left-choice"); var videoSource = isCorrect ? "screener_correct" : "screener_incorrect"; console.log("generateProperties: isCorrect =", isCorrect, "Playing video ->", videoSource); return { video: { "top": 0, "left": 0, "width": 100, "source": videoSource, "loop": false } }; }',
                'selectNextFrame': 'function(frames, frameIndex, expData) { console.log("--- screener-feedback selectNextFrame ---"); var isCorrect = false; for (var key in expData) { if (key.indexOf("screener-choice") !== -1 && expData[key].selectedImage) { isCorrect = expData[key].selectedImage === "left-choice"; } } console.log("Is correct?", isCorrect); if (isCorrect) { console.log("Correct! Skipping retry -> main-block"); return frameIndex + 2; } console.log("Wrong, continuing to retry."); return frameIndex + 1; }'
            },
            'screener-choice-retry': {
                'kind': 'exp-lookit-images-audio',
                'images': [
                    {'id': 'background', 'src': 'SH2_screenerchoice.png', 'left': 0, 'width': 100, 'top': 0, 'height': 100, 'nonChoiceOption': true},
                    {'id': 'left-choice', 'src': 'answer_rect_blank.png', 'left': 10, 'width': 35, 'top': 25, 'height': 50, 'feedbackAudio': 'this_one', 'nonChoiceOption': false},
                    {'id': 'right-choice', 'src': 'answer_rect_blank.png', 'left': 55, 'width': 35, 'top': 25, 'height': 50, 'feedbackAudio': 'this_one', 'nonChoiceOption': false}
                ],
                'audio': 'screener_question', 'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main', 'audioTypes': ['mp3'],
                'autoProceed': false, 'choiceRequired': true, 'doRecording': true
            },

            'main-block': {
                'sampler': 'random-parameter-set', 'kind': 'choice',
                'frameList': [{'kind': 'exp-lookit-video', 'video': { 'top': 0, 'left': 0, 'width': 100, 'source': 'STUDY_VIDEO', 'loop': false }, 'backgroundColor': 'black', 'autoProceed': true, 'doRecording': true, 'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main', 'videoTypes': ['mp4']}],
                'parameterSets': [ { 'STUDY_VIDEO': 'SH_study2_cb1' }, { 'STUDY_VIDEO': 'SH_study2_cb2' } ]
            },
            'dv-block': {
                'kind': 'exp-lookit-video',
                'video': { 'top': 0, 'left': 0, 'width': 100, 'source': 'SH_study2_dv', 'loop': false },
                'backgroundColor': 'black', 'autoProceed': true, 'doRecording': true,
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main', 'videoTypes': ['mp4']
            },
            'dv-choice': {
                'kind': 'exp-lookit-images-audio',
                'images': [{'id': 'background', 'src': 'SH2_dvchoice.png', 'left': 0, 'width': 100, 'top': 0, 'height': 100, 'nonChoiceOption': true}, {'id': 'left-choice-zoe', 'src': 'answer_rect_blank.png', 'left': 10, 'width': 35, 'top': 25, 'height': 50, 'feedbackAudio': 'zoe'}, {'id': 'right-choice-mia', 'src': 'answer_rect_blank.png', 'left': 55, 'width': 35, 'top': 25, 'height': 50, 'feedbackAudio': 'mia'}],
                'audio': 'dv_audio', 'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main', 'audioTypes': ['mp3'], 'choiceRequired': true, 'doRecording': true
            },
            'memory-choice-1': {
                'kind': 'exp-lookit-images-audio',
                'images': [ {'id': 'background', 'src': 'SH2_mc1.png', 'left': 0, 'width': 100, 'top': 0, 'height': 100, 'nonChoiceOption': true }, { 'id': 'student-1', 'src': 'answer_rect_blank.png', 'left': 5, 'width': 20, 'top': 30, 'height': 40, 'feedbackAudio': 'this_student' } ],
                'audio': 'mc_1', 'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main', 'audioTypes': ['mp3'], 'choiceRequired': false, 'doRecording': true
            },
            'memory-choice-2': {
                'kind': 'exp-lookit-images-audio',
                'images': [ { 'id': 'background', 'src': 'SH2_mc2.png', 'left': 0, 'width': 100, 'top': 0, 'height': 100, 'nonChoiceOption': true }, { 'id': 'student-a', 'src': 'answer_rect_blank.png', 'left': 5, 'width': 20, 'top': 30, 'height': 40, 'feedbackAudio': 'this_student' } ],
                'audio': 'mc_2', 'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main', 'audioTypes': ['mp3'], 'choiceRequired': false, 'doRecording': true
            },
            'exit-block': {
                'kind': 'exp-lookit-video',
                'video': { 'top': 0, 'left': 0, 'width': 100, 'source': 'ending', 'loop': false },
                'backgroundColor': 'black', 'autoProceed': true, 'doRecording': true,
                'baseDir': 'https://raw.githubusercontent.com/aconinenakano/selective-help/main', 'videoTypes': ['mp4']
            },
            'email-survey': {
                'kind': 'exp-lookit-survey'
            },
            'exit-survey': {
                'kind': 'exp-lookit-exit-survey'
            },
            'stop-recording': {
                'kind': 'exp-lookit-stop-recording',
                'imageAnimation': 'spin',
                'displayFullscreen': true
            }
        },

        'sequence': [
            'welcome',
            'video-config',
            'video-consent',
            'positioning',
            'start-recording',
            'welcome-block',
            'intro-block',
            'screener-choice',
            'screener-feedback',
            'screener-choice-retry',
            'main-block',
            'dv-block',
            'dv-choice',
            'memory-choice-1',
            'memory-choice-2',
            'exit-block',
            'email-survey',
            'exit-survey',
            'stop-recording'
        ]
    };
}