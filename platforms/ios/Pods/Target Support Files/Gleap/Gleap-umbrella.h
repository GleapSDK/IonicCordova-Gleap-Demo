#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "Gleap.h"
#import "GleapAction.h"
#import "GleapActivationMethodHelper.h"
#import "GleapAttachmentHelper.h"
#import "GleapConfigHelper.h"
#import "GleapConsoleLogHelper.h"
#import "GleapCore.h"
#import "GleapCustomDataHelper.h"
#import "GleapEventLogHelper.h"
#import "GleapExternalDataHelper.h"
#import "GleapFeedback.h"
#import "GleapFeedbackButton.h"
#import "GleapFrameManagerViewController.h"
#import "GleapHttpTrafficRecorder.h"
#import "GleapMetaDataHelper.h"
#import "GleapNotificationHelper.h"
#import "GleapPreFillHelper.h"
#import "GleapReplayHelper.h"
#import "GleapScreenCaptureHelper.h"
#import "GleapScreenshotListener.h"
#import "GleapScreenshotManager.h"
#import "GleapSession.h"
#import "GleapSessionHelper.h"
#import "GleapTagHelper.h"
#import "GleapTouchHelper.h"
#import "GleapTranslationHelper.h"
#import "GleapUIHelper.h"
#import "GleapUIOverlayViewController.h"
#import "GleapUIWindow.h"
#import "GleapUploadManager.h"
#import "GleapUserProperty.h"
#import "GleapWidgetManager.h"
#import "UIWindow+GleapShakeRecognizer.h"
#import "UIWindow+GleapTouchRecognizer.h"

FOUNDATION_EXPORT double GleapVersionNumber;
FOUNDATION_EXPORT const unsigned char GleapVersionString[];

