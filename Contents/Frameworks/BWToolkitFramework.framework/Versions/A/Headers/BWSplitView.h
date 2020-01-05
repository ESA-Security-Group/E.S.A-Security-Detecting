//
//  BWSplitView.h
//  BWToolkit
//
//  Created by Brandon Walkin (www.brandonwalkin.com) and Fraser Kuyvenhoven.
//  All code is provided under the New BSD license.
//

#import <Cocoa/Cocoa.h>

@interface BWSplitView : NSSplitView
{
	NSColor *color;
	BOOL colorIsEnabled, checkboxIsEnabled, dividerCanCollapse, collapsibleSubviewCollapsed;
	id __strong secondaryDelegate;
	NSMutableDictionary *minValues, *maxValues, *minUnits, *maxUnits;
	NSMutableDictionary *resizableSubviewPreferredProportion, *nonresizableSubviewPreferredSize;
	NSArray *stateForLastPreferredCalculations;
	int collapsiblePopupSelection;
	float uncollapsedSize;
	NSMutableArray *uncollapsedSizes;
	// Collapse button
	NSButton *toggleCollapseButton;
	BOOL isAnimating;
}

@property (strong) NSMutableDictionary *minValues, *maxValues, *minUnits, *maxUnits;
@property (strong) NSMutableDictionary *resizableSubviewPreferredProportion, *nonresizableSubviewPreferredSize;
@property (strong) NSArray *stateForLastPreferredCalculations;
@property (strong) NSButton *toggleCollapseButton;
@property (strong) id secondaryDelegate;
@property BOOL collapsibleSubviewCollapsed;
@property int collapsiblePopupSelection;
@property BOOL dividerCanCollapse;

// The split view divider color
@property (copy) NSColor *color;

// Flag for whether a custom divider color is enabled. If not, the standard divider color is used.
@property BOOL colorIsEnabled;

// Call this method to collapse or expand a subview configured as collapsible in the IB inspector.
- (IBAction)toggleCollapse:(id)sender;
- (void)splitViewDidResizeSubviews:(NSNotification *)aNotification;
- (BOOL)hasCollapsibleSubview;
- (void)resizeAndAdjustSubviews;
- (BOOL)subviewIsResizable:(NSView *)subview;
- (NSView *)collapsibleSubview;
- (CGFloat)subviewMinimumSize:(int)subviewIndex;
- (CGFloat)subviewMaximumSize:(int)subviewIndex;
- (void)drawDimpleInRect:(NSRect)aRect;
- (void)drawGradientDividerInRect:(NSRect)aRect;
- (int)resizableSubviews;

- (BOOL)subviewIsCollapsible:(NSView *)subview;
- (BOOL)subviewIsCollapsed:(NSView *)subview;
- (int)collapsibleSubviewIndex;
- (BOOL)collapsibleSubviewIsCollapsed;

- (void)recalculatePreferredProportionsAndSizes;
- (BOOL)validatePreferredProportionsAndSizes;
- (void)validateAndCalculatePreferredProportionsAndSizes;
- (void)clearPreferredProportionsAndSizes;

- (void)saveUncollapsedSizes;
- (void)restoreUncollapsedSizes;
- (BOOL)hasCollapsibleDivider;
- (void)removeMinSizeForCollapsibleSubview;
- (void)setMinSizeForCollapsibleSubview:(NSNumber *)minSize;
- (void)setCollapsibleSubviewCollapsedHelper:(NSNumber *)flag;

@end
